import { TooltipProps } from 'recharts';
import { CustomTooltipPaper, CustomTooltipText } from './CustomTooltip.styles';
import { DataType } from '../../../enum/TopDataCards.enum';
import { useTranslation } from 'react-i18next';
import { useTooltipName } from './helpers/useTooltipName';

interface CustomTooltipProps extends TooltipProps<number, string> {
    dataType: DataType;
}

export const CustomTooltip = ({ payload, active, dataType }: CustomTooltipProps) => {
    const { t } = useTranslation();
    const topValue = useTooltipName(dataType, payload && payload.length > 0 && payload[0].payload.name);

    if (active && payload) {
        return (
            <CustomTooltipPaper>
                <CustomTooltipText>{topValue}</CustomTooltipText>
                <CustomTooltipText>
                    {t('common.value')}: {payload[0].value}$
                </CustomTooltipText>
            </CustomTooltipPaper>
        );
    }

    return null;
};
