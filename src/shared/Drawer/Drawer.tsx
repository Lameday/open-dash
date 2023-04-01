import * as React from 'react';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '../ListItem/ListItem';
import { StyledDrawer, DrawerHeader } from './drawer.styles';
import { Typography } from '@mui/material';

interface LayoutProps {
    smallScreen: boolean;
    isOpen: boolean;
    toggle: () => void;
}

const Drawer = ({ isOpen, smallScreen, toggle }: LayoutProps) => {
    return smallScreen ? (
        <StyledDrawer variant='temporary' open={isOpen} onClose={toggle}>
            <DrawerHeader>
                <Typography>OPEN DASHBOARD</Typography>
            </DrawerHeader>
            <List>
                <ListItem label='Dashboard' navigate='/dashboard' />
                <ListItem label='ModuleOne' navigate='/moduleone' />
                <ListItem label='ModuleTwo' navigate='/moduleone' />
                <ListItem label='ModuleThree' navigate='/moduleone' />
            </List>
        </StyledDrawer>
    ) : (
        <StyledDrawer variant='permanent' open={isOpen}>
            <DrawerHeader>
                <MenuIcon onClick={toggle} />
            </DrawerHeader>
            <List>
                <ListItem label='Dashboard' navigate='/dashboard' />
                <ListItem label='ModuleOne' navigate='/moduleone' />
                <ListItem label='ModuleTwo' navigate='/moduleone' />
                <ListItem label='ModuleThree' navigate='/moduleone' />
            </List>
        </StyledDrawer>
    );
};

export default Drawer;
