import { AppBar } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    return (
        <AppBar
            sx={{
                position: 'static',
            }}
        ></AppBar>
    );
}

export default NavBar;
