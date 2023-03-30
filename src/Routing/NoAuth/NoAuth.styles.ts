import { styled } from '@mui/material/styles';
import { Paper, Button, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// export const StyledBox = styled(Box)`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     flex-wrap: wrap;
//     margin: auto;
//     max-width: 500px;
//     width: 100%;
// `;

// export const SignInContainer = styled(Container)`
//     display: flex;
//     height: 100vh;
//     min-width: 100vw;
//     background-color: #93db94;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

export const ObjectStyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minWidth: '100vw',
    backgroundColor: '#93db94',
    padding: '20px',
    alignItems: 'stretch',
    '@media (min-width:400px)': {
        alignItems: 'center',
        padding: '60px',
    },
}));

export const ObjectStyledpaper = styled(Paper)(({ theme }) => ({
    boxSizing: 'border-box',
    maxWidth: '500px',
    width: '100%',
    height: '100%',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (min-width:400px)': {
        backgroundColor: 'white',
    },
}));

export const StyledPaper = styled(Paper)`
    box-sizing: border-box;
    max-width: 500px;
    width: 100%;
    min-height: 500px;
    padding: 24px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SignInIcon = styled(AccountCircleIcon)(({ theme }) => ({
    fontSize: ' 100px',
    marginTop: '20px',
    marginBottom: '20px',
}));

export const SignInButton = styled(Button)`
    width: 100%;
`;

export const SignInErrorMessage = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    fontWeight: 'bold',
}));
