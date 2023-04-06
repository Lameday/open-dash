import { Stack } from '@mui/material';
import { styled } from '@mui/system';

export const ModuleContainer = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
    height: '100%',
}));

export const MainContainer = styled(Stack)(() => ({
    width: '100%',
}));

export const AppContainer = styled(Stack)(() => ({
    height: '100dvh',
}));
