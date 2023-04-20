import { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';

interface OrderArray {
    name: string;
    order: number;
}
interface PlaceHolderArray {
    name: string;
    profit: number;
}

const getValueToGraph = (dataType: string, orderArray: OrderArray, placeHolderArray: PlaceHolderArray) => {
    if (dataType === 'month') {
        return { array: orderArray, dataKey: 'order' };
    } else if (dataType === 'year') {
        return { array: placeHolderArray, dataKey: 'profit' };
    }
};

export const EarningGraph: FC<{ orderArray: OrderArray[]; placeHolderArray: PlaceHolderArray[]; dataType: string }> = ({
    orderArray,
    placeHolderArray,
    dataType,
}) => {
    const data = getValueToGraph(dataType, orderArray, placeHolderArray);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data?.array} width={275} height={50}>
                <Line type='monotone' dataKey={data?.dataKey} stroke='white' strokeWidth={2} />
                <Tooltip
                    wrapperStyle={{ outline: 'none' }}
                    content={<CustomTooltip payload={data?.array} active={undefined} />}
                    position={{ y: 75 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
