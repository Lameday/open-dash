import { FC, ReactNode } from 'react';
import { Typography, Grid, Avatar } from '@mui/material';
import { StyledPaper, ButtonOutline, LowerText, UpperText } from './SmallTopDataCard.styles';

interface SmallTopDataCardProps {
    buttonIcon?: ReactNode;
    containerbgcolor?: string;
    outlinebgcolor?: string;
    textcolor?: string;
}

export const SmallTopDataCard: FC<SmallTopDataCardProps> = ({
    containerbgcolor,
    buttonIcon,
    outlinebgcolor,
    textcolor,
}) => {
    return (
        <StyledPaper containerbgcolor={containerbgcolor} elevation={0}>
            <Grid container>
                <Grid item container xs={1.5}>
                    <ButtonOutline variant='rounded' outlinebgcolor={outlinebgcolor}>
                        {buttonIcon}
                    </ButtonOutline>
                </Grid>
                <Grid item container xs={10}>
                    <Grid item container xs={12}>
                        <UpperText variant='body1' textcolor={textcolor}>
                            zzz
                        </UpperText>
                    </Grid>
                    <Grid xs={12} item container>
                        <LowerText variant='body1' textcolor={textcolor}>
                            Total Income
                        </LowerText>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
