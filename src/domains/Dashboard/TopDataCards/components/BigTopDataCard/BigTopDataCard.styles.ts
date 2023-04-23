import { styled } from '@mui/material/styles';
import { Typography, Grid, Avatar, CircularProgress } from '@mui/material';
import { DashboardCardPaper } from '../../../DashboardCard/DashboardCardPaper.styles';

type StyledProps = {
    cardType: string;
};

export const StyledPaper = styled(DashboardCardPaper)<StyledProps>(({ theme, cardType }) => ({
    boxSizing: 'border-box',
    height: '100%',
    backgroundColor: cardType === 'Order' ? theme.palette.primary.main : theme.palette.secondary.main,
    padding: theme.spacing(1.5),
}));

export const TopCardGrid = styled(Grid)(() => ({
    justifyContent: 'space-between',
}));

export const TopLeftButtonOutline = styled(Avatar)<StyledProps>(({ theme, cardType }) => ({
    marginTop: theme.spacing(1),
    backgroundColor: cardType === 'Order' ? theme.palette.primary.dark : theme.palette.secondary.dark,
}));

export const MiddleValuesGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center',
    marginTop: theme.spacing(1.75),
}));

export const MiddleValueTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(0.5),
    color: theme.palette.common.white,
}));

export const MiddleValueIconOutline = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(2.7),
    height: theme.spacing(2.7),
    backgroundColor: 'rgba(255,255,255,0.65)',
}));

export const MiddleValueDownTypography = styled(Typography)<StyledProps>(({ theme, cardType }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: cardType === 'Order' ? theme.palette.primary.light : theme.palette.secondary.light,
}));

export const MiddleGraphContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));

export const StyledLoadingBackground = styled(StyledPaper)(() => ({
    display: 'flex',
    justifyContent: 'center',
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.common.white,
}));
