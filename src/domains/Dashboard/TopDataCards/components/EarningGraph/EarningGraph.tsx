import { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';
import { DataType } from '../../enum/TopDataCards.enum';
import { useTheme } from '@mui/material';

interface OrderArray {
    name: string;
    order: number;
}

export const EarningGraph: FC<{ array: OrderArray[] | null; dataType: DataType }> = ({ array, dataType }) => {
    const theme = useTheme();

    if (array === null) {
        return null;
    }

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={array} width={275} height={50}>
                <Line type='monotone' dataKey='order' stroke={theme.palette.common.white} strokeWidth={2} dot={false} />
                <Tooltip
                    wrapperStyle={{ outline: 'none' }}
                    content={<CustomTooltip payload={array} active={undefined} dataType={dataType} />}
                    position={{ y: 75 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
