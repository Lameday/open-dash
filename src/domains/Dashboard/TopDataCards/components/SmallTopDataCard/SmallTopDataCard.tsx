import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
    StyledPaper,
    ButtonOutline,
    LowerText,
    UpperText,
    ButtonContainer,
    ContentContainer,
    StyledLoadingBackground,
    StyledCircularProgress,
} from './SmallTopDataCard.styles';

interface SmallTopDataCardProps {
    buttonIcon?: ReactNode;
    textcolor?: string;
    value?: number | string | null;
    cardType: string;
    isError: boolean;
}

export const SmallTopDataCard: FC<SmallTopDataCardProps> = ({ buttonIcon, textcolor, value, cardType, isError }) => {
    const { t } = useTranslation();

    if (isError) {
        value = '-';
    }

    if (value === null) {
        return (
            <StyledLoadingBackground cardType={cardType} elevation={0}>
                <StyledCircularProgress size={48} />
            </StyledLoadingBackground>
        );
    }

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
                            {t('dashboard.totalIncome')}
                        </LowerText>
                    </Grid>
                </Grid>
            </ContentContainer>
        </StyledPaper>
    );
};
