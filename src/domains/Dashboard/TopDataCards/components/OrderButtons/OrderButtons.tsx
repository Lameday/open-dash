import { Grid, ToggleButton } from '@mui/material';
import { MouseEvent, FC } from 'react';
import { OrderButtonGroup } from './OrderButtons.style';
import { DataType } from '../../TopDataCards';

interface OrderButtonsProps {
    dataType: DataType;
    setDataType: (value: DataType) => void;
}

export const OrderButtons: FC<OrderButtonsProps> = ({ dataType, setDataType }) => {
    const handleChange = (event: MouseEvent<HTMLElement>, newDataType: DataType) => {
        setDataType(newDataType);
    };

    return (
        <Grid>
            <OrderButtonGroup value={dataType} exclusive onChange={handleChange}>
                <ToggleButton value={DataType.Month}>Month</ToggleButton>
                <ToggleButton value={DataType.Year}>Year</ToggleButton>
            </OrderButtonGroup>
        </Grid>
    );
};
