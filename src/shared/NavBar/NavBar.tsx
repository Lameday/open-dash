import { Typography } from '@mui/material';
import { StyledNavBar } from './navBar.styles';
import MenuIcon from '@mui/icons-material/Menu';

interface LayoutProps {
    smallScreen: boolean;
    toggle: () => void;
}

const NavBar = ({ smallScreen, toggle }: LayoutProps) => {
    return (
        <StyledNavBar>
            {smallScreen ? <MenuIcon onClick={toggle} /> : null}
            <Typography>NavBar</Typography>
        </StyledNavBar>
    );
};
export default NavBar;
