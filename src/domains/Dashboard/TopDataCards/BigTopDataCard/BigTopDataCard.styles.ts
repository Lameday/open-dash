import { styled } from '@mui/material/styles';
import { Paper, Typography, Grid, Avatar } from '@mui/material';

type StyledPaperProps = {
    containerbgcolor?: string;
};

type ButtonOutlineProps = {
    outlinebgcolor?: string;
};

export const StyledPaper = styled(Paper)<StyledPaperProps>(({ containerbgcolor, theme }) => ({
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(15),
    backgroundColor: containerbgcolor,
    padding: theme.spacing(1.5),
}));

export const TopCardGrid = styled(Grid)(() => ({
    justifyContent: 'space-between',
}));

export const TopLeftButtonOutline = styled(Avatar)<ButtonOutlineProps>(({ outlinebgcolor, theme }) => ({
    marginTop: theme.spacing(1),
    backgroundColor: outlinebgcolor,
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
    backgroundColor: '#9999CC',
}));

export const MiddleValueDownTypography = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: '#b39ddb',
}));

export const MiddleGraphContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));

