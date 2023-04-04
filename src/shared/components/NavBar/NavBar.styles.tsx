import { styled } from '@mui/system';

export const StyledNavBar = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
}));
