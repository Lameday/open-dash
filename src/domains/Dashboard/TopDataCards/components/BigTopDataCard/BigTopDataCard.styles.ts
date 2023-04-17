import { styled } from '@mui/material/styles';
import { Typography, Grid, Avatar } from '@mui/material';
import { DashboardCardPaper } from '../../../DashboardCard/DashboardCardPaper.styles';

type StyledPaperProps = {
    containerbgcolor?: string;
};

export const StyledPaper = styled(DashboardCardPaper)<StyledPaperProps>(({ containerbgcolor, theme }) => ({
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(15),
    backgroundColor: containerbgcolor,
    padding: theme.spacing(1.5),
}));

export const TopCardGrid = styled(Grid)(() => ({
    justifyContent: 'space-between',
}));

export const TopLeftButtonOutline = styled(Avatar)(({ theme }) => ({
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0.24)',
}));

export const MiddleValuesGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center',
    marginTop: theme.spacing(1.75),
}));

export const MiddleValueTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginRight: theme.spacing(0.5),
    color: 'white',
}));

export const MiddleValueIconOutline = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(2.7),
    height: theme.spacing(2.7),
    backgroundColor: 'rgba(255,255,255,0.65)',
}));

export const MiddleValueDownTypography = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.6)',
}));

export const MiddleGraphContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));
