import { Box, Button, Grid, Paper, Stack } from '@mui/material';
import { StyledPaper, StyledTypography } from './TotalOrderCard.styles';
import { data } from '../utility/data';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

export const TotalOrderCard = () => {
    const [selectedTimeSpan, setSelectedTimeSpan] = useState(false);

    return (
        <StyledPaper elevation={0}>
            <Grid container>
                <Grid container item>
                    <Grid container item sx={{ justifyContent: 'flex-end' }}>
                        <Button size='small' variant='contained' color='primary'>
                            Month
                        </Button>
                        <Button size='small' variant='outlined' sx={{ color: 'white' }}>
                            Year
                        </Button>
                    </Grid>
                </Grid>
                <Grid container item>
                    <StyledTypography variant='h6'> Total Order:</StyledTypography>
                </Grid>
                <Grid container item xs={12} sx={{ justifyContent: 'center' }}>
                    <ResponsiveContainer width='100%' height={50}>
                        <LineChart data={data} width={275} height={50}>
                            <Line type='monotone' dataKey='investment' stroke='white' strokeWidth={2} />
                            <Tooltip wrapperStyle={{ backgroundColor: 'black', width: '50px', height: '50px' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
