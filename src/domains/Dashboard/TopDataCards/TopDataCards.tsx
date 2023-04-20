import { Grid } from '@mui/material';
import { BigTopDataCard } from './components/BigTopDataCard/BigTopDataCard';
import { SmallTopDataCard } from './components/SmallTopDataCard/SmallTopDataCard';
import { EarningGraph } from './components/EarningGraph/EarningGraph';
import { OrderButtons } from './components/OrderButtons/OrderButtons';
import { TableChart, Storefront, Redeem, LocalAtm } from '@mui/icons-material';
import { MiddleValueIcon, StyledCircularProgress } from './TopDataCards.styles';
import { EarningButton } from './components/EarningButton/EarningButton';
import { useState } from 'react';
import { useDashboardValues } from './hooks/useDashboardValues';
import { useTheme } from '@mui/material';

export enum CardType {
    Order = 'Order',
    Earning = 'Earning',
}

export enum DataType {
    Month = 'Month',
    Year = 'Year',
}

enum FetchError {
    Err = 'Err',
}

export const TopDataCards = () => {
    const [dataType, setDataType] = useState(DataType.Month);
    const { dashboardValues, isLoading, isError, isSuccess } = useDashboardValues(dataType);
    const theme = useTheme();

    return (
        <>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    cardType={CardType.Earning}
                    leftTopButton={<LocalAtm />}
                    rightTopButton={<EarningButton />}
                    value={
                        isSuccess ? (
                            dashboardValues.earningTotal
                        ) : isLoading ? (
                            <StyledCircularProgress size={theme.spacing(3.5)} />
                        ) : isError ? (
                            FetchError.Err
                        ) : (
                            ''
                        )
                    }
                    middleValueIcon={<MiddleValueIcon rotate='30' iconColor={theme.palette.secondary.dark} />}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BigTopDataCard
                    graph={
                        isSuccess ? (
                            <EarningGraph array={dashboardValues.orderArray} dataType={dataType} />
                        ) : isLoading ? null : isError ? null : null
                    }
                    leftTopButton={<Redeem />}
                    rightTopButton={<OrderButtons dataType={dataType} setDataType={setDataType} />}
                    value={
                        isSuccess ? (
                            dashboardValues.orderTotal
                        ) : isLoading ? (
                            <StyledCircularProgress size={theme.spacing(3.5)} />
                        ) : isError ? (
                            FetchError.Err
                        ) : (
                            ''
                        )
                    }
                    middleValueIcon={<MiddleValueIcon rotate='210' iconColor={theme.palette.secondary.main} />}
                    cardType={CardType.Order}
                />
            </Grid>
            <Grid container item xs={12} lg={4} spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        buttonIcon={<TableChart />}
                        textcolor={theme.palette.common.white}
                        value={
                            isSuccess ? (
                                dashboardValues.incomeTotal
                            ) : isLoading ? (
                                <StyledCircularProgress size={theme.spacing(2.5)} />
                            ) : isError ? (
                                FetchError.Err
                            ) : (
                                ''
                            )
                        }
                        cardType={CardType.Earning}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SmallTopDataCard
                        buttonIcon={<Storefront />}
                        textcolor={theme.palette.common.white}
                        value={
                            isSuccess ? (
                                dashboardValues.incomeTotal
                            ) : isLoading ? (
                                <StyledCircularProgress size={theme.spacing(2.5)} />
                            ) : isError ? (
                                FetchError.Err
                            ) : (
                                ''
                            )
                        }
                        cardType={CardType.Order}
                    />
                </Grid>
            </Grid>
        </>
    );
};
