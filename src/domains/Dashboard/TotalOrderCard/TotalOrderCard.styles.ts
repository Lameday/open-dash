import { styled } from '@mui/material/styles';
import { Button, Paper, Typography } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(15),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: 'white',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary,
}));
