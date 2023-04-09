import { StyledPaper } from './YearLossCard.styles';
import { Typography } from '@mui/material';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../utility/data';

export const YearLossCard = () => {
    return (
        <StyledPaper>
            <Typography variant='body2' sx={{ fontWeight: 'bold', color: 'white' }}>
                Loss this Year:
            </Typography>
            <ResponsiveContainer width='100%' height={35}>
                <LineChart data={data} width={275} height={30}>
                    <Line type='monotone' dataKey='loss' stroke='white' strokeWidth={2} />
                    <Tooltip wrapperStyle={{ backgroundColor: 'black', width: '50px', height: '50px' }} />
                </LineChart>
            </ResponsiveContainer>
        </StyledPaper>
    );
};
