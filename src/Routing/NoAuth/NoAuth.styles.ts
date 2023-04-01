import { styled } from '@mui/material/styles';
import { Paper, Button, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minWidth: '100vw',
    backgroundColor: '#99ffb4',
    padding: '20px',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        padding: '60px',
    },
}));

export const StyledPaper = styled(Paper)(() => ({
    boxSizing: 'border-box',
    maxWidth: '500px',
    width: '100%',
    height: '100%',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}));

export const StyledIcon = styled(AccountCircleIcon)(({ theme }) => ({
    fontSize: ' 100px',
    marginTop: '40px',
    marginBottom: '20px',
    [theme.breakpoints.up('sm')]: {
        marginTop: '20px',
    },
}));

export const StyledButton = styled(Button)(() => ({
    width: '100%',
    marginTop: '16px',
}));

export const StyledErrorMessage = styled(Typography)(() => ({
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    fontWeight: 'bold',
}));
