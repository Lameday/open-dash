export interface ChartData {
    name: string | number;
    investment: number;
    loss: number;
    profit: number;
    maintenance: number;
}
export interface BarDataKey {
    dataKey: string;
    fill: string;
    stackId?: string;
    name: string;
}

export interface ChartProps {
    chartData?: ChartData[];
    xAxisKey?: string;
    xAxisTickLine?: boolean;
    yAxisLine?: boolean;
    yAxisTickLine?: boolean;
    cartesianGridVertical?: boolean;
    tooltipCursor?: boolean;
    containerHeight?: string | number;
    maxBarSize?: number;
    barDataKeys?: BarDataKey[];
}
