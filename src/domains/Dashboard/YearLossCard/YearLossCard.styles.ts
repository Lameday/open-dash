import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(9),
    backgroundColor: theme.palette.error.dark,
    padding: theme.spacing(1),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: 'white',
}));
