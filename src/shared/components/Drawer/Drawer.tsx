import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HtmlIcon from '@mui/icons-material/Html';
import DrawerMenuItem from '../DrawerMenuItem/DrawerMenuItem';
import { StyledDrawer, DrawerHeader } from './Drawer.styles';
import { Typography } from '@mui/material';
import { FC } from 'react';

interface DrawerProps {
    smallScreen: boolean;
    isOpen: boolean;
    toggle: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, smallScreen, toggle }) => {
    return smallScreen ? (
        <StyledDrawer variant='temporary' open={isOpen} onClose={toggle}>
            <DrawerHeader>
                <Typography>OPEN DASHBOARD</Typography>
            </DrawerHeader>
            <DrawerMenuItem label='Dashboard' navigate='/dashboard' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleOne' navigate='/moduleone' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleTwo' navigate='/moduleone' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleThree' navigate='/moduleone' itemIcon={<HtmlIcon />} />
        </StyledDrawer>
    ) : (
        <StyledDrawer variant='permanent' open={isOpen}>
            <DrawerHeader>
                <MenuIcon onClick={toggle} />
            </DrawerHeader>
            <DrawerMenuItem label='Dashboard' navigate='/dashboard' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleOne' navigate='/moduleone' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleTwo' navigate='/moduleone' itemIcon={<HtmlIcon />} />
            <DrawerMenuItem label='ModuleThree' navigate='/moduleone' itemIcon={<HtmlIcon />} />
        </StyledDrawer>
    );
};

export default Drawer;
