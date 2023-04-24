import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const DashboardCardPaper = styled(Paper)(({ theme }) => ({
    height: `calc(100% - ${theme.spacing(4)})`,
    padding: theme.spacing(2),
}));
