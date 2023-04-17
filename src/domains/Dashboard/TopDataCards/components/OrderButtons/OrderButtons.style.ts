import { ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OrderButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: 'inherit',
    '& .MuiToggleButton-root': {
        padding: theme.spacing(0.15, 1),
        borderRadius: 0,
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: theme.spacing(1.7),
        '&.Mui-selected': {
            backgroundColor: 'rgba(0,0,0,0.24)',
            color: 'white',
            '& :hover': {
                color: 'inherit',
            },
        },
    },
}));
