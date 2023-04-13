import { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';

interface Data {
    name: string;
    order: number;
}

export const EarningGraph: FC<{ data: Data[] }> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data} width={275} height={50}>
                <Line type='monotone' dataKey='order' stroke='white' strokeWidth={2} />
                <Tooltip
                    wrapperStyle={{ outline: 'none' }}
                    content={<CustomTooltip payload={data} active={undefined} />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
