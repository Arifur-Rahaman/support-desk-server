import { Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
const NewTicket = () => {
    const {user} = useSelector((state)=>state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = ('')
    return (
        <Container>
            
        </Container>
    );
};

export default NewTicket;