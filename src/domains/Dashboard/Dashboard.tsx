import { Grid } from '@mui/material';
import { DashboardCard } from './DashboardCard/DashboardCard';
import { DashboardChart } from './DashboardChart/DashboardChart';

export const Dashboard = () => {
    return (
        <Grid container rowSpacing={2}>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={4}>
                    {/*I think that DashboardCard should be used at component itself rather than here.*/}
                    <DashboardCard>Total Earning</DashboardCard>
                </Grid>
                <Grid item xs={4}>
                    <DashboardCard> Total Order</DashboardCard>
                </Grid>
                <Grid container item xs={4} spacing={2}>
                    <Grid item xs={12}>
                        <DashboardCard> Top right up</DashboardCard>
                    </Grid>
                    <Grid item xs={12}>
                        <DashboardCard> Top right down</DashboardCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={8}>
                    <DashboardChart />
                </Grid>
                <Grid item xs={4}>
                    <DashboardCard>Popular Stocks</DashboardCard>
                </Grid>
            </Grid>
        </Grid>
    );
};
