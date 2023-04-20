import { styled } from '@mui/material/styles';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

interface ButtonOutlineProps {
    outlinebgcolor?: string;
}

interface TextProps {
    textcolor?: string;
}

type StyledProps = {
    cardType?: string;
};

export const StyledPaper = styled(Paper)<StyledProps>(({ theme, cardType }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '100%',
    minHeight: theme.spacing(9),
    backgroundColor:
        cardType === 'Order'
            ? theme.palette.primary.main
            : cardType === 'Earning'
            ? theme.palette.secondary.main
            : theme.palette.common.black,
    padding: theme.spacing(1),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.common.white,
}));

export const ContentContainer = styled(Grid)(() => ({
    alignItems: 'center',
}));

export const ButtonContainer = styled(Grid)(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

export const ButtonOutline = styled(Avatar)<StyledProps>(({ theme, cardType }) => ({
    backgroundColor:
        cardType === 'Order'
            ? theme.palette.primary.dark
            : cardType === 'Earning'
            ? theme.palette.secondary.dark
            : theme.palette.common.black,
    cursor: 'pointer',
}));

export const UpperText = styled(Typography)<TextProps>(({ textcolor }) => ({
    fontWeight: 'bold',
    color: textcolor,
}));

export const LowerText = styled(Typography)<TextProps>(({ textcolor }) => ({
    color: textcolor,
}));