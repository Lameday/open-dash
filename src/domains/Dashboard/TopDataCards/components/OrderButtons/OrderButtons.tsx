import { Grid, ToggleButton } from '@mui/material';
import { MouseEvent, FC } from 'react';
import { OrderButtonGroup } from './OrderButtons.style';
import { DataType } from '../../enum/TopDataCards.enum';
import { useTranslation } from 'react-i18next';

interface OrderButtonsProps {
    dataType: DataType;
    setDataType: (value: DataType) => void;
}

export const OrderButtons: FC<OrderButtonsProps> = ({ dataType, setDataType }) => {
    const { t } = useTranslation();
    const handleChange = (event: MouseEvent<HTMLElement>, newDataType: DataType | null) => {
        if (newDataType) {
            setDataType(newDataType);
        }
    };

    return (
        <Grid>
            <OrderButtonGroup value={dataType} exclusive onChange={handleChange}>
                <ToggleButton value={DataType.Month}>{t('common.month')} </ToggleButton>
                <ToggleButton value={DataType.Year}> {t('common.year')}</ToggleButton>
            </OrderButtonGroup>
        </Grid>
    );
};
