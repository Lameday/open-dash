import { styled } from '@mui/system';

export const StyledChartHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2),
}));
