// import { useTranslation } from 'react-i18next';

// export const OpenDashboard = () => {
//     const { t } = useTranslation();
//     return <h1>{t('dashboard.title')}</h1>;
// };

import { Grid } from '@mui/material';
import { Item } from './Dashboard.styles';

export const Dashboard = () => {
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item> Total Earning</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item> Total Order</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid>
                            <Item> Top right up</Item>
                        </Grid>
                        <Grid>
                            <Item> Top right down</Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item> Chart</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Popular Stocks</Item>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
