import { Grid } from '@mui/material';
import { BigTopDataCard } from './components/BigTopDataCard/BigTopDataCard';
import { SmallTopDataCard } from './components/SmallTopDataCard/SmallTopDataCard';
import { EarningGraph } from './components/EarningGraph/EarningGraph';
import { OrderButtons } from './components/OrderButtons/OrderButtons';
import { TableChart, Storefront, Redeem, LocalAtm } from '@mui/icons-material';
import { MiddleValueIcon } from './TopDataCards.styles';
import { EarningButton } from './components/EarningButton/EarningButton';
import { useState } from 'react';
import { useTopDataCardsValues } from './hooks/useTopDataCardsValues';
import { useTheme } from '@mui/material';
import { CardType } from './enum/TopDataCards.enum';
import { DataType } from './enum/TopDataCards.enum';

export const TopDataCards = () => {
    const [dataType, setDataType] = useState(DataType.Month);
    const { dashboardValues, isError } = useTopDataCardsValues(dataType);
    const theme = useTheme();

    return (
        <>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    isError={isError}
                    cardType={CardType.Earning}
                    leftTopButton={<LocalAtm />}
                    rightTopButton={<EarningButton />}
                    value={dashboardValues && dashboardValues.earningTotal}
                    middleValueIcon={<MiddleValueIcon rotate='30' iconColor={theme.palette.secondary.dark} />}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    isError={isError}
                    graph={<EarningGraph array={dashboardValues && dashboardValues.orderArray} dataType={dataType} />}
                    leftTopButton={<Redeem />}
                    rightTopButton={<OrderButtons dataType={dataType} setDataType={setDataType} />}
                    value={dashboardValues && dashboardValues.orderTotal}
                    middleValueIcon={<MiddleValueIcon rotate='210' iconColor={theme.palette.secondary.main} />}
                    cardType={CardType.Order}
                />
            </Grid>
            <Grid container item xs={12} lg={4} spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        isError={isError}
                        buttonIcon={<TableChart />}
                        textColor={theme.palette.common.white}
                        value={dashboardValues && dashboardValues.incomeTotal}
                        cardType={CardType.Earning}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        isError={isError}
                        buttonIcon={<Storefront />}
                        textColor={theme.palette.common.white}
                        value={dashboardValues && dashboardValues.incomeTotal}
                        cardType={CardType.Order}
                    />
                </Grid>
            </Grid>
        </>
    );
};
