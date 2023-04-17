import { styled } from '@mui/material/styles';
import { ArrowUpward } from '@mui/icons-material';

interface IconProps {
    iconcolor?: string;
}

export const MiddleValueIcon = styled(ArrowUpward)<IconProps>(({ rotate, iconcolor, theme }) => ({
    color: iconcolor,
    transform: `rotate(${rotate}deg)`,
    width: theme.spacing(2),
    height: theme.spacing(2),
}));
