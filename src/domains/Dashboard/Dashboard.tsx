import { Grid } from '@mui/material';
import { DashboardCard } from './DashboardCard/DashboardCard';
import { TopDataCards } from './TopDataCards/TopDataCards';

export const Dashboard = () => {
    return (
        <Grid container rowSpacing={2}>
            <Grid container item xs={12} spacing={2}>
                <TopDataCards />
            </Grid>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={8}>
                    <DashboardCard> Chart</DashboardCard>
                </Grid>
                <Grid item xs={4}>
                    <DashboardCard>Popular Stocks</DashboardCard>
                </Grid>
            </Grid>
        </Grid>
    );
};
