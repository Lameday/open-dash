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
    textcolor?: string;
    value?: number;
    cardType?: string;
}

export const SmallTopDataCard: FC<SmallTopDataCardProps> = ({ buttonIcon, textcolor, value, cardType }) => {
    return (
        <StyledPaper cardType={cardType} elevation={0}>
            <ContentContainer container>
                <ButtonContainer item>
                    <ButtonOutline variant='rounded' cardType={cardType}>
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
