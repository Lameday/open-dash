import { ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OrderButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: 'inherit',
    '& .MuiToggleButton-root': {
        padding: theme.spacing(0.15, 1),
        borderRadius: theme.shape.borderRadius,
        border: 'none',
        color: theme.palette.common.white,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'none',
        fontSize: theme.typography.fontSize,
        '&.Mui-selected': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            '& :hover': {
                color: 'inherit',
            },
        },
    },
}));
