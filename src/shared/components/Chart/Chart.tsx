import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { theme } from '../../../shared/theme/theme';
import { FC } from 'react';
import { CustomLegend } from './CustomLegend';
import { ChartProps } from './model/ChartData';

export const Chart: FC<ChartProps> = ({
    chartData,
    xAxisKey,
    xAxisTickLine,
    yAxisLine,
    yAxisTickLine,
    cartesianGridVertical,
    tooltipCursor,
    containerHeight,
    maxBarSize,
    barDataKeys,
}) => {
    return (
        <ResponsiveContainer width='100%' height={containerHeight}>
            <BarChart data={chartData}>
                <CartesianGrid vertical={cartesianGridVertical} stroke={theme.palette.grey[200]} />
                <XAxis dataKey={xAxisKey} tickLine={xAxisTickLine} />
                <YAxis axisLine={yAxisLine} tickLine={yAxisTickLine} />
                <Tooltip cursor={tooltipCursor} wrapperStyle={{ outline: 'none' }} />
                <Legend iconType='square' content={<CustomLegend />} />
                {barDataKeys?.map((item) => {
                    return (
                        <Bar
                            key={item.dataKey}
                            dataKey={item.dataKey}
                            fill={item.fill}
                            stackId={item.stackId}
                            maxBarSize={maxBarSize}
                            name={item.name}
                        />
                    );
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};
