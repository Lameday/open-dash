import { Grid } from '@mui/material';
import { StyledPaper, StyledTypography } from './TotalEarningCard.styles';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { getEarningValue } from './helpers/getEarningValue';
import { data } from '../utility/data';

export const TotalEarningCard = () => {
    const earningValue = getEarningValue(data);
    return (
        <StyledPaper elevation={0}>
            <Grid container>
                <Grid sx={{ justifyContent: 'flex-end' }} container item>
                    <DensitySmallIcon sx={{ color: 'white' }} />
                </Grid>
                <Grid container item>
                    <StyledTypography variant='h6'> Total Earning:</StyledTypography>
                </Grid>
                <Grid container item sx={{ justifyContent: 'center' }}>
                    <StyledTypography variant='h4'> ${earningValue}</StyledTypography>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
