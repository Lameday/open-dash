import styled from '@emotion/styled';
import { Box, Paper, Button, Container } from '@mui/material';

export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;
`;

export const SignInButton = styled(Button)`
    min-width: 188px;
    margin: 10px;
`;

export const SignInContainer = styled(Container)`
    height: 100vh;
`;
