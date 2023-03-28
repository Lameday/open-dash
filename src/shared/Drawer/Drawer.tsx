import * as React from 'react';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import useDrawerState from './hooks/useDrawerState';
import { NavBar, StyledDrawer, DrawerHeader, DrawerBox, ContentBox } from './drawer.styles';
import { Outlet, Link } from 'react-router-dom';

const Drawer = () => {
    const { open, handleDrawerToggle } = useDrawerState();

    return (
        <DrawerBox>
            <NavBar open={open}>NAV BAR</NavBar>
            <StyledDrawer variant='permanent' open={open}>
                <DrawerHeader>
                    <MenuIcon onClick={handleDrawerToggle} />
                </DrawerHeader>
                <List>
                    <ListItem>
                        <Link to={'/dashboard'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HtmlIcon />
                                </ListItemIcon>
                                <ListItemText>Dashboard</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/moduleone'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HtmlIcon />
                                </ListItemIcon>
                                <ListItemText>ModuleOne</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/moduleone'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HtmlIcon />
                                </ListItemIcon>
                                <ListItemText>ModuleOne</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/moduleone'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HtmlIcon />
                                </ListItemIcon>
                                <ListItemText>ModuleOne</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </StyledDrawer>
            <ContentBox>
                <DrawerHeader />
                <Outlet />
            </ContentBox>
        </DrawerBox>
    );
};

export default Drawer;
