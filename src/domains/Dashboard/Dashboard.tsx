import { Grid } from '@mui/material';
import { DashboardCard } from './DashboardCard/DashboardCard';
import { TopDataCards } from './TopDataCards/TopDataCards';
import { DashBoardDataProvider } from './DashboardDataContext/DashboardDataContext';

export const Dashboard = () => {
    return (
        <DashBoardDataProvider>
            <Grid container rowSpacing={2}>
                <TopDataCards />
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={8}>
                        <DashboardCard> Chart</DashboardCard>
                    </Grid>
                    <Grid item xs={4}>
                        <DashboardCard>Popular Stocks</DashboardCard>
                    </Grid>
                </Grid>
            </Grid>
        </DashBoardDataProvider>
    );
};
