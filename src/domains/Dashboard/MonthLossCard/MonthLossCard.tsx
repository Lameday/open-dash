import { StyledPaper } from './MonthLossCard.styles';
import { Typography } from '@mui/material';
import { data } from '../utility/data';
import { getActualMonthLoss } from './helpers/getActualMonthLoss';

export const MonthLossCard = () => {
    const monthLoss = getActualMonthLoss(data);

    return (
        <StyledPaper>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
                Loss this Month ${monthLoss}
            </Typography>
        </StyledPaper>
    );
};
