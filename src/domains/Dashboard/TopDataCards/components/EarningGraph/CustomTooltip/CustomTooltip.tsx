import { TooltipProps } from 'recharts';
import { CustomTooltipPaper, CustomTooltipText } from './CustomTooltip.styles';
import { DataType } from '../../../TopDataCards';

interface CustomTooltipProps extends TooltipProps<number, string> {
    dataType: DataType;
}

export const CustomTooltip = ({ payload, active, dataType }: CustomTooltipProps) => {
    console.log(dataType);
    if (active && payload) {
        return (
            <CustomTooltipPaper>
                <CustomTooltipText>
                    {dataType === DataType.Month ? 'Day' : dataType == DataType.Year ? 'Month' : 'err'}:
                    {payload[0].payload.name}
                </CustomTooltipText>
                <CustomTooltipText>Value: {payload[0].value}$</CustomTooltipText>
            </CustomTooltipPaper>
        );
    }

    return null;
};
