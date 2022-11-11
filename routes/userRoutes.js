const express =  require('express')
const router = express.Router()

const {registerUser, signinUser, getMe, sendMessage} = require('../controllers/userControllers') 
const {protect} = require('../middleware/authMiddleware')
router.post('/register', registerUser)
router.post('/sendmail', sendMessage)
router.post('/login', signinUser)
router.get('/me', protect, getMe)

module.exports = router