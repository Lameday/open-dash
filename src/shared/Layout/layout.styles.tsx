import { Stack } from '@mui/material';
import { styled } from '@mui/system';

export const ContainerMain = styled(Stack)(({ theme }) => ({
    padding: 3,
    backgroundColor: theme.palette.grey[100],
    height: `calc(100% - ${theme.spacing(6)})`,
}));

export const StyledStack = styled(Stack)(() => ({
    width: '100%',
}));

export const StyledRightStack = styled(Stack)(() => ({
    height: '100dvh',
}));
