import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

interface DrawerMenuItemProps {
    label: string;
    navigate: string;
    itemIcon: ReactNode;
}

const DrawerMenuItem: FC<DrawerMenuItemProps> = ({ label, navigate, itemIcon }) => {
    return (
        <NavLink to={navigate}>
            <ListItemButton>
                <ListItemIcon>{itemIcon}</ListItemIcon>
                <ListItemText>{label}</ListItemText>
            </ListItemButton>
        </NavLink>
    );
};

export default DrawerMenuItem;
