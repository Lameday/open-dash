import { TooltipProps } from 'recharts';
import { CustomTooltipPaper, CustomTooltipText } from './CustomTooltip.styles';
import { DataType } from '../../../enum/TopDataCards.enum';
import { useTranslation } from 'react-i18next';
import { getTooltipName } from './helpers/getTooltipName';

interface CustomTooltipProps extends TooltipProps<number, string> {
    dataType: DataType;
}

export const CustomTooltip = ({ payload, active, dataType }: CustomTooltipProps) => {
    const { t } = useTranslation();

    if (active && payload) {
        return (
            <CustomTooltipPaper>
                <CustomTooltipText>{getTooltipName(dataType, payload[0].payload.name, t)}</CustomTooltipText>
                <CustomTooltipText>
                    {t('common.value')}: {payload[0].value}$
                </CustomTooltipText>
            </CustomTooltipPaper>
        );
    }

    return null;
};
