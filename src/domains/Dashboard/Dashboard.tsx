import { Grid } from '@mui/material';
import { DashboardCard } from './DashboardCard/DashboardCard';
import { TotalEarningCard } from './TotalEarningCard/TotalEarningCard';
import { TotalOrderCard } from './TotalOrderCard/TotalOrderCard';
import { MonthLossCard } from './MonthLossCard/MonthLossCard';
import { YearLossCard } from './YearLossCard/YearLossCard';

export const Dashboard = () => {
    return (
        <Grid container rowSpacing={2}>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    {/*I think that DashboardCard should be used at component itself rather than here.*/}
                    <TotalEarningCard />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TotalOrderCard />
                </Grid>
                <Grid container item xs={12} lg={4} spacing={2}>
                    <Grid item xs={12} sm={6} lg={12}>
                        <MonthLossCard />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                        <YearLossCard />
                    </Grid>
                </Grid>
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
