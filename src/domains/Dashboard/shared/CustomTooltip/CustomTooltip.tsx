import { TooltipProps } from 'recharts';
import { CustomTooltipPaper, CustomTooltipText } from './CustomTooltip.styles';

export const CustomTooltip = ({ payload, active }: TooltipProps<number, string>) => {
    if (active && payload) {
        return (
            <CustomTooltipPaper>
                <CustomTooltipText>Month: {payload[0].payload.name}</CustomTooltipText>
                <CustomTooltipText>Value: {payload[0].value}</CustomTooltipText>
            </CustomTooltipPaper>
        );
    }

    return null;
};
