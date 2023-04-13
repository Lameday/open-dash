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

export const MiddleValueIcon = styled(ArrowUpward)<IconProps>(({ rotate, iconcolor }) => ({
    color: iconcolor,
    transform: `rotate(${rotate}deg)`,
    width: 18,
    height: 18,
}));

export const MiddleValueDownTypography = styled(Typography)<TypographyProps>(({ color }) => ({
    fontWeight: 'bold',
    color: color,
}));
