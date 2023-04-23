import { styled } from '@mui/material/styles';
import { Avatar, Grid, Paper, Typography, CircularProgress } from '@mui/material';

interface TextProps {
    textcolor?: string;
}

type StyledProps = {
    cardType: string;
};

export const StyledPaper = styled(Paper)<StyledProps>(({ theme, cardType }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: cardType === 'Order' ? theme.palette.primary.main : theme.palette.secondary.main,
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
    backgroundColor: cardType === 'Order' ? theme.palette.primary.dark : theme.palette.secondary.dark,
    cursor: 'pointer',
}));

export const UpperText = styled(Typography)<TextProps>(({ theme, textcolor }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: textcolor,
}));

export const LowerText = styled(Typography)<TextProps>(({ textcolor }) => ({
    color: textcolor,
}));

export const StyledLoadingBackground = styled(StyledPaper)(() => ({
    display: 'flex',
    justifyContent: 'center',
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.common.white,
}));
