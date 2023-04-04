import { Outlet } from 'react-router-dom';
import Drawer from '../components/Drawer/Drawer';
import NavBar from '../components/NavBar/NavBar';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { theme } from '../theme/theme';
import { AppContainer, MainContainer, ModuleContainer } from './Layout.styles';

export const Layout = () => {
    const [isOpen, setOpen] = useState(false);
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <AppContainer direction='row'>
            <Drawer isOpen={isOpen} smallScreen={smallScreen} toggle={handleDrawerToggle} />
            <MainContainer>
                <NavBar smallScreen={smallScreen} toggle={handleDrawerToggle} />
                <ModuleContainer>
                    <Outlet />
                </ModuleContainer>
            </MainContainer>
        </AppContainer>
    );
};
