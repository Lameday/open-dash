import { Typography } from '@mui/material';
import { StyledNavBar } from './navBar.styles';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

interface NavBarProps {
    smallScreen: boolean;
    toggle: () => void;
}

const NavBar: FC<NavBarProps> = ({ smallScreen, toggle }) => {
    return (
        <StyledNavBar>
            {smallScreen ? <MenuIcon onClick={toggle} /> : null}
            <Typography>NavBar</Typography>
        </StyledNavBar>
    );
};
export default NavBar;
