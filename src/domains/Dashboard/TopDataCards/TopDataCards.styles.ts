import { styled } from '@mui/material/styles';
import { ArrowUpward } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { colorChannel } from '@mui/system';

interface TypographyProps {
    color?: string;
}
interface IconProps {
    iconcolor?: string;
}

export const MiddleValueIcon = styled(ArrowUpward)<IconProps>(({ rotate, iconcolor, theme }) => ({
    color: iconcolor,
    transform: `rotate(${rotate}deg)`,
    width: theme.spacing(2),
    height: theme.spacing(2),
}));

export const MiddleValueDownTypography = styled(Typography)<TypographyProps>(({ color }) => ({
    fontWeight: 'bold',
    color: color,
}));
