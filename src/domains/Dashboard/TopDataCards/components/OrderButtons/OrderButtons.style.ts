import { ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

type StyledProps = {
    cardType?: string;
};

export const OrderButtonGroup = styled(ToggleButtonGroup)<StyledProps>(({ theme }) => ({
    backgroundColor: 'inherit',
    '& .MuiToggleButton-root': {
        padding: theme.spacing(0.15, 1),
        borderRadius: theme.spacing(0.875),
        border: 'none',
        color: theme.palette.common.white,
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: theme.spacing(1.7),
        '&.Mui-selected': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            '& :hover': {
                color: 'inherit',
            },
        },
    },
}));
