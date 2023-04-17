import { Grid } from '@mui/material';
import { BigTopDataCard } from './components/BigTopDataCard/BigTopDataCard';
import { SmallTopDataCard } from './components/SmallTopDataCard/SmallTopDataCard';
import { EarningGraph } from './components/EarningGraph/EarningGraph';
import { OrderButtons } from './components/OrderButtons/OrderButtons';
import { TableChart, Storefront, Redeem, LocalAtm } from '@mui/icons-material';
import { MiddleValueIcon } from './TopDataCards.styles';
import { EarningButton } from './components/EarningButton/EarningButton';
import { useState } from 'react';
import { useDashboardValues } from './hooks/useDashboardValues';
import { theme } from '../../../shared/theme/theme';
export const TopDataCards = () => {
    const [dataType, setDataType] = useState('month');
    const { dashboardValues } = useDashboardValues();
    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    leftTopButton={<LocalAtm />}
                    rightTopButton={<EarningButton />}
                    value={dashboardValues.earningTotal}
                    middleValueIcon={<MiddleValueIcon rotate='30' iconcolor={theme.palette.secondary.dark} />}
                    cardType='Earning'
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    graph={
                        <EarningGraph
                            orderArray={dashboardValues.orderArray}
                            placeHolderArray={dashboardValues.placeHolderArray}
                            dataType={dataType}
                        />
                    }
                    leftTopButton={<Redeem />}
                    rightTopButton={<OrderButtons dataType={dataType} setDataType={setDataType} />}
                    value={dashboardValues.orderTotal}
                    middleValueIcon={<MiddleValueIcon rotate='210' iconcolor={theme.palette.secondary.main} />}
                    cardType='Order'
                />
            </Grid>
            <Grid container item xs={12} lg={4} spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        containerbgcolor={theme.palette.secondary.main}
                        buttonIcon={<TableChart />}
                        outlinebgcolor='rgba(0,0,0,0.24)'
                        textcolor={theme.palette.common.white}
                        value={dashboardValues.incomeTotal}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        containerbgcolor={theme.palette.common.white}
                        buttonIcon={<Storefront />}
                        outlinebgcolor='#FFC107'
                        textcolor={theme.palette.common.black}
                        value={dashboardValues.incomeTotal}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
