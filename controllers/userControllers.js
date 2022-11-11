const asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const sendEmail = require('./../utils/email')

//@des Register new user
//@route /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }
    //Find if user already exist
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new error('Invalid user data');
    }
})


//@des Login a user
//@route /api/users/login
//@access Public
const signinUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email}) 

    //Check the user is exist or not and if exits then compare the password of user and db
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
    
})


//@desc get current user
//@route /api/users/me
//@access Private
const getMe = asyncHandler( async (req, res)=>{
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
    res.status(200).json(user)
})


//@desc send email
//@route /api/users/sendemail
//@access still not setup
const sendMessage = asyncHandler(async(req, res)=>{
    try {
        await sendEmail({
           email: 'arifur15-2111@diu.edu.bd',
           subject: 'Just a message',
           message: 'Just a message' 
        })
        res.status(200).json({message: 'sent successfully'})
    } catch (error) {
        res.status(401)
        throw new Error(error)
        
    }
})

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'})
}



module.exports = {
    registerUser,
    signinUser,
    getMe,
    sendMessage,
}