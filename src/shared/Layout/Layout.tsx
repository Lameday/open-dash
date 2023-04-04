import { Outlet } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import NavBar from '../NavBar/NavBar';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { theme } from '../theme/theme';
import { ContainerMain, StyledStack, StyledRightStack } from './layoutstyles';

export const Layout = () => {
    const [isOpen, setOpen] = useState(false);
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <StyledRightStack direction='row'>
            <Drawer isOpen={isOpen} smallScreen={smallScreen} toggle={handleDrawerToggle} />
            <StyledStack>
                <NavBar smallScreen={smallScreen} toggle={handleDrawerToggle} />
                <ContainerMain>
                    <Outlet />
                </ContainerMain>
            </StyledStack>
        </StyledRightStack>
    );
};
