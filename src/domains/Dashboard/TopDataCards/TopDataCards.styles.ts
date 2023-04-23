import { styled } from '@mui/material/styles';
import { ArrowUpward } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

interface IconProps {
    iconColor?: string;
}

export const MiddleValueIcon = styled(ArrowUpward)<IconProps>(({ rotate, iconColor, theme }) => ({
    color: iconColor,
    transform: `rotate(${rotate}deg)`,
    width: theme.spacing(2),
    height: theme.spacing(2),
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.common.white,
}));
