import { styled } from '@mui/material';
import { Button } from '@mui/material';

interface StyledButtonInterface {
    fontSize: string | number;
    lineHeight: string | number;
}

export const StyledButton = styled(Button)<StyledButtonInterface>(({ fontSize, lineHeight }) => ({
    fontSize: fontSize,
    lineHeight: lineHeight,
}));
