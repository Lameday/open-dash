import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import {
    StyledPaper,
    ButtonOutline,
    LowerText,
    UpperText,
    ButtonContainer,
    ContentContainer,
} from './SmallTopDataCard.styles';

interface SmallTopDataCardProps {
    buttonIcon?: ReactNode;
    containerbgcolor?: string;
    outlinebgcolor?: string;
    textcolor?: string;
    value?: number;
}

export const SmallTopDataCard: FC<SmallTopDataCardProps> = ({
    containerbgcolor,
    buttonIcon,
    outlinebgcolor,
    textcolor,
    value,
}) => {
    return (
        <StyledPaper containerbgcolor={containerbgcolor} elevation={0}>
            <ContentContainer container>
                <ButtonContainer item>
                    <ButtonOutline variant='rounded' outlinebgcolor={outlinebgcolor}>
                        {buttonIcon}
                    </ButtonOutline>
                </ButtonContainer>
                <Grid item>
                    <Grid item container xs={12}>
                        <UpperText variant='body1' textcolor={textcolor}>
                            ${value}
                        </UpperText>
                    </Grid>
                    <Grid xs={12} item container>
                        <LowerText variant='body1' textcolor={textcolor}>
                            Total Income
                        </LowerText>
                    </Grid>
                </Grid>
            </ContentContainer>
        </StyledPaper>
    );
};
