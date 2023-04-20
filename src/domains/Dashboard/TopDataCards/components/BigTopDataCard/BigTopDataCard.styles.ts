import { styled } from '@mui/material/styles';
import { Typography, Grid, Avatar } from '@mui/material';
import { DashboardCardPaper } from '../../../DashboardCard/DashboardCardPaper.styles';

type StyledProps = {
    cardType?: string;
};

export const StyledPaper = styled(DashboardCardPaper)<StyledProps>(({ theme, cardType }) => ({
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(15),
    backgroundColor:
        cardType === 'Order'
            ? theme.palette.primary.main
            : cardType === 'Earning'
            ? theme.palette.secondary.main
            : theme.palette.common.black,
    padding: theme.spacing(1.5),
}));

export const TopCardGrid = styled(Grid)(() => ({
    justifyContent: 'space-between',
}));

export const TopLeftButtonOutline = styled(Avatar)<StyledProps>(({ theme, cardType }) => ({
    marginTop: theme.spacing(1),
    backgroundColor:
        cardType === 'Order'
            ? theme.palette.primary.dark
            : cardType === 'Earning'
            ? theme.palette.secondary.dark
            : theme.palette.common.black,
}));

export const MiddleValuesGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center',
    marginTop: theme.spacing(1.75),
}));

export const MiddleValueTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginRight: theme.spacing(0.5),
    color: theme.palette.common.white,
}));

export const MiddleValueIconOutline = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(2.7),
    height: theme.spacing(2.7),
    backgroundColor: 'rgba(255,255,255,0.65)',
}));

export const MiddleValueDownTypography = styled(Typography)<StyledProps>(({ theme, cardType }) => ({
    fontWeight: 'bold',
    color:
        cardType === 'Order'
            ? theme.palette.primary.light
            : cardType === 'Earning'
            ? theme.palette.secondary.light
            : theme.palette.common.black,
}));

export const MiddleGraphContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));
