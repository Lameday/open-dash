import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const CustomTooltipPaper = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    width: '90px',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const CustomTooltipText = styled(Typography)(() => ({
    color: 'white',
    fontWeight: 'bold',
}));
