import { Grid } from '@mui/material';
import { StyledPaper, StyledTypography } from './TotalOrderCard.styles';
import { data } from '../utility/data';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from '../shared/CustomTooltip/CustomTooltip';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

export const TotalOrderCard = () => {
    return (
        <StyledPaper elevation={0}>
            <Grid container>
                <Grid sx={{ justifyContent: 'flex-end' }} container item>
                    <DensitySmallIcon sx={{ color: 'white' }} />
                </Grid>
                <Grid container item>
                    <StyledTypography variant='h6'> Total Order:</StyledTypography>
                </Grid>
                <Grid container item xs={12} sx={{ justifyContent: 'center' }}>
                    <ResponsiveContainer width='100%' height={50}>
                        <LineChart data={data} width={275} height={50}>
                            <Line type='monotone' dataKey='investment' stroke='white' strokeWidth={2} />
                            <Tooltip content={<CustomTooltip payload={data} active={undefined} />} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
