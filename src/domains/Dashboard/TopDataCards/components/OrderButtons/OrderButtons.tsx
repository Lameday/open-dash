import { Grid, ToggleButton } from '@mui/material';
import { MouseEvent, FC } from 'react';
import { OrderButtonGroup } from './OrderButtons.style';

interface OrderButtonsProps {
    dataType: string;
    setDataType: (value: string) => void;
}

export const OrderButtons: FC<OrderButtonsProps> = ({ dataType, setDataType }) => {
    const handleChange = (event: MouseEvent<HTMLElement>, newDataType: string) => {
        setDataType(newDataType);
    };
    return (
        <Grid>
            <OrderButtonGroup value={dataType} exclusive onChange={handleChange}>
                <ToggleButton value='month'>Month</ToggleButton>
                <ToggleButton value='year'>Year</ToggleButton>
            </OrderButtonGroup>
        </Grid>
    );
};
