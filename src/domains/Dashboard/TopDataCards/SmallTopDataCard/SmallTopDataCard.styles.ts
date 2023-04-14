import { styled } from '@mui/material/styles';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

interface StyledPaperProps {
    containerbgcolor?: string;
}

interface ButtonOutlineProps {
    outlinebgcolor?: string;
}

interface TextProps {
    textcolor?: string;
}

export const StyledPaper = styled(Paper)<StyledPaperProps>(({ theme, containerbgcolor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(9),
    backgroundColor: containerbgcolor,
    padding: theme.spacing(1),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: 'white',
}));

export const ContentContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));

export const ButtonContainer = styled(Grid)(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

export const ButtonOutline = styled(Avatar)<ButtonOutlineProps>(({ outlinebgcolor }) => ({
    backgroundColor: outlinebgcolor,
    cursor: 'pointer',
}));

export const UpperText = styled(Typography)<TextProps>(({ textcolor }) => ({
    fontWeight: 'bold',
    color: textcolor,
}));

export const LowerText = styled(Typography)<TextProps>(({ textcolor }) => ({
    color: textcolor,
}));
