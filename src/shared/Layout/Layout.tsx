import { Outlet } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import NavBar from '../NavBar/NavBar';
import { useMediaQuery } from '@mui/material';
import { Stack, Box } from '@mui/system';
import { useState } from 'react';
import { theme } from '../theme/theme';

export const Layout = () => {
    const [isOpen, setOpen] = useState(false);
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <Stack direction='row'>
            <Drawer isOpen={isOpen} smallScreen={smallScreen} toggle={handleDrawerToggle} />
            <Stack>
                <NavBar smallScreen={smallScreen} toggle={handleDrawerToggle} />
                <Box>
                    <Outlet />
                </Box>
            </Stack>
        </Stack>
    );
};
