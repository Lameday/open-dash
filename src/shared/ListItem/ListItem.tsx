import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import { Link } from 'react-router-dom';

interface ListItemProps {
    label: string;
    navigate: string;
}

const ListItem = ({ label, navigate }: ListItemProps) => {
    return (
        <div>
            <Link to={navigate}>
                <ListItemButton>
                    <ListItemIcon>
                        <HtmlIcon />
                    </ListItemIcon>
                    <ListItemText>{label}</ListItemText>
                </ListItemButton>
            </Link>
        </div>
    );
};

export default ListItem;
