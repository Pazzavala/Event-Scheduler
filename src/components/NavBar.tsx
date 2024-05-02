import { CatchingPokemon } from '@mui/icons-material';
import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
// import React from 'react';

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                    POKEMONAPP
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button color='inherit'>Home Page</Button>
                    <Button color='inherit'>Add Event</Button>
                    <Button color='inherit'>Stocks</Button>
                    <Button color='inherit'>Schedule</Button>
                    <Button color='inherit'>About Me</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
