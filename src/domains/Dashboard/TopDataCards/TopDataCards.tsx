import { Card, Grid } from '@mui/material';
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

export enum CardType {
    Order = 'Order',
    Earning = 'Earning',
}

export enum DataType {
    Month = 'month',
    Year = 'year',
}

enum FetchError {
    Err = 'Err',
}

export const TopDataCards = () => {
    const [dataType, setDataType] = useState(DataType.Month);
    const { dashboardValues, isLoading, isError } = useDashboardValues();

    return (
        <>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    leftTopButton={<LocalAtm />}
                    rightTopButton={<EarningButton />}
                    value={isLoading ? FetchError.Err : dashboardValues.earningTotal}
                    middleValueIcon={<MiddleValueIcon rotate='30' iconColor={theme.palette.secondary.dark} />}
                    cardType={CardType.Earning}
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
                    middleValueIcon={<MiddleValueIcon rotate='210' iconColor={theme.palette.secondary.main} />}
                    cardType={CardType.Order}
                />
            </Grid>
            <Grid container item xs={12} lg={4} spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        buttonIcon={<TableChart />}
                        textcolor={theme.palette.common.white}
                        value={dashboardValues.incomeTotal}
                        cardType={CardType.Earning}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        buttonIcon={<Storefront />}
                        textcolor={theme.palette.common.white}
                        value={dashboardValues.incomeTotal}
                        cardType={CardType.Order}
                    />
                </Grid>
            </Grid>
        </>
    );
};
