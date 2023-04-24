import { DashboardCard } from '../DashboardCard/DashboardCard';
import { theme } from '../../../shared/theme/theme';
import { MenuItem, Select, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledChartHeader } from './DashboardChart.styles';
import { BarStackId, TimeFrame, ChartDataKey, BarSize } from './enum/DashboardChart.enum';
import { useGetChartData } from './hooks/useGetChartData';
import { Chart } from '../../../shared/components/Chart/Chart';

export const DashboardChart = () => {
    const { t } = useTranslation();
    const { chartData, totalProfit, timeFrame, handleTimeFrameChange } = useGetChartData();

    const barDataKeys = [
        {
            dataKey: ChartDataKey.Investment,
            fill: theme.palette.secondary.light,
            stackId: BarStackId.Stack,
            name: t(`dashboard.chart.${ChartDataKey.Investment}`),
        },
        {
            dataKey: ChartDataKey.Loss,
            fill: theme.palette.secondary.main,
            stackId: BarStackId.Stack,
            name: t(`dashboard.chart.${ChartDataKey.Loss}`),
        },
        {
            dataKey: ChartDataKey.Profit,
            fill: theme.palette.primary.main,
            stackId: BarStackId.Stack,
            name: t(`dashboard.chart.${ChartDataKey.Profit}`),
        },
        {
            dataKey: ChartDataKey.Maintenance,
            fill: theme.palette.primary.light,
            stackId: BarStackId.Stack,
            name: t(`dashboard.chart.${ChartDataKey.Maintenance}`),
        },
    ];

    return (
        <DashboardCard>
            <StyledChartHeader>
                <Stack>
                    <Typography variant='subtitle2'>{t('dashboard.chart.title')}</Typography>
                    <Typography variant='h5'>${totalProfit}</Typography>
                </Stack>
                <Select value={timeFrame} onChange={handleTimeFrameChange}>
                    <MenuItem value={TimeFrame.Today}>{t(`dashboard.chart.menu.${TimeFrame.Today}`)}</MenuItem>
                    <MenuItem value={TimeFrame.ThisMonth}>{t(`dashboard.chart.menu.${TimeFrame.ThisMonth}`)}</MenuItem>
                    <MenuItem value={TimeFrame.ThisYear}>{t(`dashboard.chart.menu.${TimeFrame.ThisYear}`)}</MenuItem>
                </Select>
            </StyledChartHeader>
            <Chart
                chartData={chartData}
                cartesianGridVertical={false}
                xAxisKey={ChartDataKey.Name}
                xAxisTickLine={false}
                yAxisLine={false}
                yAxisTickLine={false}
                tooltipCursor={false}
                containerHeight={500}
                maxBarSize={BarSize.Max}
                barDataKeys={barDataKeys}
            />
        </DashboardCard>
    );
};
