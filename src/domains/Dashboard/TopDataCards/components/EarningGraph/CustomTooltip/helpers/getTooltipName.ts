import { DataType } from '../../../../enum/TopDataCards.enum';
import { TFunction } from 'i18next';

const translateMonths = (month: string, t: TFunction<'translation', undefined, 'translation'>): string => {
    return t(`common.${month}`);
};

export const getTooltipName = (
    dataType: DataType,
    value: string,
    t: TFunction<'translation', undefined, 'translation'>,
) => {
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
