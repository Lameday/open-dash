import { ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OrderButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: '#1E88E5',
    '& .MuiToggleButton-root': {
        padding: theme.spacing(0.15, 1),
        borderRadius: 0,
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: theme.spacing(1.7),
        '&.Mui-selected': {
            backgroundColor: '#1565C0',
            color: 'white',
            '& :hover': {
                color: 'inherit',
            },
        },
    },
}));
