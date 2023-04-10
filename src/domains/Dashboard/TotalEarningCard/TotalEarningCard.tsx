import { Grid } from '@mui/material';
import { StyledPaper, StyledTypography } from './TotalEarningCard.styles';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { getEarningValue } from './helpers/getEarningValue';
import { data } from '../utility/data';
import { Avatar } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

export const TotalEarningCard = () => {
    const earningValue = getEarningValue(data);
    return (
        <StyledPaper elevation={0}>
            <Grid container>
                <Grid sx={{ justifyContent: 'flex-end' }} container item>
                    <DensitySmallIcon sx={{ color: 'white' }} />
                </Grid>
                <Grid container item sx={{ alignItems: 'center' }}>
                    <Grid item>
                        <StyledTypography variant='h4' sx={{ fontWeight: 'bold' }}>
                            ${earningValue}
                        </StyledTypography>
                    </Grid>
                    <Grid item>{<Avatar> {<ArrowUpward sx={{ fill: 'currentcolor' }} />} </Avatar>}</Grid>
                </Grid>
                <Grid container item sx={{ justifyContent: 'flex-start' }}>
                    <StyledTypography variant='body1' sx={{ fontWeight: 'bold', color: '#b39ddb' }}>
                        Total Earning:
                    </StyledTypography>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
