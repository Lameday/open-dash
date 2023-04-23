import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomTooltipPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.black,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const CustomTooltipText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
}));
