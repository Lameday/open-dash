import { Grid } from '@mui/material';
import { StyledPaper, StyledTypography } from './TotalEarningCard.styles';
import { getEarningValue } from './helpers/getEarningValue';
import { data } from '../utility/data';
import { Avatar } from '@mui/material';
import { ArrowUpward, MoreHoriz, AutoAwesomeMotion } from '@mui/icons-material';

export const TotalEarningCard = () => {
    const earningValue = getEarningValue(data);
    return (
        <StyledPaper elevation={0}>
            <Grid container>
                <Grid sx={{ justifyContent: 'space-between' }} container item>
                    <Avatar variant='rounded' sx={{ marginTop: '8px', backgroundColor: '#4527a0' }}>
                        <AutoAwesomeMotion />
                    </Avatar>
                    <Avatar variant='rounded' sx={{ backgroundColor: '#4527a0' }}>
                        <MoreHoriz />
                    </Avatar>
                </Grid>
                <Grid container item>
                    <Grid container item xs={6} sx={{ alignItems: 'center', marginTop: '14px' }}>
                        <Grid item>
                            <StyledTypography variant='h4' sx={{ fontWeight: 'bold', marginRight: '4px' }}>
                                ${earningValue}
                            </StyledTypography>
                        </Grid>
                        <Grid item>
                            {
                                <Avatar sx={{ width: 24, height: 24, backgroundColor: '#9999CC', color: '#5E35B1' }}>
                                    <ArrowUpward
                                        sx={{
                                            fill: 'currentcolor',
                                            transform: 'rotate3d(1, 1, 1, 45deg)',
                                            width: 18,
                                            height: 18,
                                        }}
                                    />
                                </Avatar>
                            }
                        </Grid>
                        <Grid container item sx={{ justifyContent: 'flex-start' }}>
                            <StyledTypography variant='body1' sx={{ fontWeight: 'bold', color: '#b39ddb' }}>
                                Total Earning
                            </StyledTypography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6}>
                            <h1>graph</h1>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
