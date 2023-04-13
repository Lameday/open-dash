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

export const TopLeftButtonOutline = styled(Avatar)<ButtonOutlineProps>(({ outlinebgcolor }) => ({
    marginTop: '8px',
    backgroundColor: outlinebgcolor,
}));

export const MiddleValuesGrid = styled(Grid)(() => ({
    alignItems: 'center',
    marginTop: '14px',
}));

export const MiddleValueTypography = styled(Typography)(() => ({
    fontWeight: 'bold',
    marginRight: '4px',
    color: 'white',
}));

export const MiddleValueIconOutline = styled(Avatar)(() => ({
    width: 24,
    height: 24,
    backgroundColor: '#9999CC',
    color: '#5E35B1',
}));

export const MiddleValueDownTypography = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: '#b39ddb',
}));

export const MiddleGraphContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));
