import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopRightButtonOutline = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
}));