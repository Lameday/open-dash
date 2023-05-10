import { DataType } from '../../../../enum/TopDataCards.enum';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

const translateMonths = (month: string, t: TFunction<'translation', undefined, 'translation'>): string => {
    return t(`common.${month}`);
};

export const useTooltipName = (dataType: DataType, value: string) => {
    const { t } = useTranslation();
    switch (dataType) {
        case DataType.Month: {
            return `${t('common.day')}: ${value}`;
        }
        case DataType.Year: {
            return `${t('common.month')}: ${translateMonths(value.toLocaleLowerCase(), t)}`;
        }
        default:
            'Wrong Data type given';
    }
};
