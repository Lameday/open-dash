import { Button, Grid } from '@mui/material';

export const OrderButtons = () => {
    return (
        <Grid>
            <Button variant='contained' size='small' disableElevation='true' color='dashboard'>
                Month
            </Button>
            <Button variant='contained' size='small' disableElevation='true' color='dashboard'>
                Year
            </Button>
        </Grid>
    );
};
