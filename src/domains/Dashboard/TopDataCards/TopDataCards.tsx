import { Grid } from '@mui/material';
import { BigTopDataCard } from './BigTopDataCard/BigTopDataCard';
import { SmallTopDataCard } from './SmallTopDataCard/SmallTopDataCard';
import { EarningGraph } from './components/EarningGraph/EarningGraph';
import { OrderButtons } from './components/OrderButtons/OrderButtons';
import { useContext } from 'react';
import { DashBoardDataContext } from '../DashboardDataContext/DashboardDataContext';
import { AutoAwesomeMotion, TableChart, Storefront } from '@mui/icons-material';
import { MiddleValueIcon, MiddleValueDownTypography } from './TopDataCards.styles';
import { EarningButton } from './components/EarningButton/EarningButton';

export const TopDataCards = () => {
    const { orderArray, orderTotal, earningTotal, incomeTotal } = useContext(DashBoardDataContext);
    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    leftTopButton={<AutoAwesomeMotion />}
                    rightTopButton={<EarningButton />}
                    value={earningTotal}
                    middleValueIcon={<MiddleValueIcon rotate='30' iconcolor='#5E35B1' />}
                    middleValueDownTypography={
                        <MiddleValueDownTypography color='#b39ddb' variant='body1'>
                            Total Earning
                        </MiddleValueDownTypography>
                    }
                    containerbgcolor='#5E35B1'
                    outlinebgcolor='#4527a0'
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    graph={<EarningGraph data={orderArray} />}
                    leftTopButton={<AutoAwesomeMotion />}
                    rightTopButton={<OrderButtons />}
                    value={orderTotal}
                    middleValueIcon={<MiddleValueIcon rotate='210' iconcolor='#1E88E5' />}
                    middleValueDownTypography={
                        <MiddleValueDownTypography color='#90CAF9' variant='body1'>
                            Total Order
                        </MiddleValueDownTypography>
                    }
                    containerbgcolor='#1E88E5'
                    outlinebgcolor='#1565C0'
                />
            </Grid>
            <Grid container item xs={12} lg={4} spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        containerbgcolor='#1E88E5'
                        buttonIcon={<TableChart />}
                        outlinebgcolor='#1565C0'
                        textcolor='white'
                        value={incomeTotal}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        containerbgcolor='white'
                        buttonIcon={<Storefront />}
                        outlinebgcolor='#FFC107'
                        textcolor='black'
                        value={incomeTotal}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
