import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getChartData } from '../helpers/getChartData';
import { TimeFrame } from '../enum/DashboardChart.enum';
import { SelectChangeEvent } from '@mui/material';

export const useGetChartData = () => {
    const [timeFrame, setTimeFrame] = useState(TimeFrame.ThisYear);

    const { data } = useQuery({
        queryKey: [`dashboardChart-${timeFrame}`],
        queryFn: () => getChartData(timeFrame),
    });

    const totalProfit = data?.reduce((acc, { profit }) => acc + profit, 0);

    const chartData = data?.map(({ name, profit, investment, loss, maintenance }) => ({
        name,
        profit,
        investment,
        loss,
        maintenance,
    }));

    const handleTimeFrameChange = (event: SelectChangeEvent) => {
        setTimeFrame(event.target.value as TimeFrame);
    };

    return { chartData, timeFrame, totalProfit, handleTimeFrameChange };
};
