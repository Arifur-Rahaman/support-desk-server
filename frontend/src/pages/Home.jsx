import { Button, Container} from '@mui/material';
import React from 'react';
import { MainButton } from '../shared/Button';
import { HeadingPrimary, HeadingSecondary } from '../shared/Heading';

const Home = () => {
    return (
        <Container maxWidth='xs'>
            <HeadingPrimary align='center' variant='h4' component='h1'>What do you need help with?</HeadingPrimary>
            <HeadingSecondary align='center' variant='h5' component='h2'>Please choose from option below</HeadingSecondary>
            <Button variant="outlined" sx={{color: 'black', width:'100%', display:'block'}}>Create Ticket</Button>
            <MainButton>View My Tickets</MainButton>
        </Container>
    );
};

export default Home;