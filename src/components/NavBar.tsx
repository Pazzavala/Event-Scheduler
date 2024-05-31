import { EventNote } from '@mui/icons-material';
import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    };
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <EventNote />
                </IconButton>
                <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                    Event Scheduler
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button
                        color='inherit'
                        onClick={() => handleNavigation('/')}
                    >
                        Home Page
                    </Button>
                    <Button
                        color='inherit'
                        onClick={() => handleNavigation('/SchedulePage')}
                    >
                        Schedule
                    </Button>
                    <Button
                        color='inherit'
                        onClick={() => handleNavigation('/AddEventPage')}
                    >
                        Add Event
                    </Button>

                    <Button
                        color='inherit'
                        onClick={() => handleNavigation('/AboutPage')}
                    >
                        About Me
                    </Button>
                    {/* <Button
                        color='inherit'
                        onClick={() => handleNavigation('/StocksPage')}
                    >
                        Stocks
                    </Button> */}
                    <Button
                        color='inherit'
                        onClick={() => handleNavigation('/LoginPage')}
                    >
                        Login
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
