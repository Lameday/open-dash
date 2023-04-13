import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonOutlineProps = {
    outlinebgcolor?: string;
};

export const TopRightButtonOutline = styled(Avatar)<ButtonOutlineProps>(({ outlinebgcolor }) => ({
    cursor: 'pointer',
    backgroundColor: outlinebgcolor,
}));
