import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
    StyledPaper,
    TopCardGrid,
    TopLeftButtonOutline,
    MiddleValuesGrid,
    MiddleValueTypography,
    MiddleValueIconOutline,
    MiddleGraphContainer,
    MiddleValueDownTypography,
    StyledCircularProgress,
    StyledLoadingBackground,
} from './BigTopDataCard.styles';
import { CardType } from '../../enum/TopDataCards.enum';

interface BigTopDataCardProps {
    graph?: ReactNode;
    leftTopButton?: ReactNode;
    rightTopButton?: ReactNode;
    middleValueIcon?: ReactNode;
    value: number | string | null;
    cardType: CardType;
    isError: boolean;
}

export const BigTopDataCard: FC<BigTopDataCardProps> = ({
    graph,
    leftTopButton,
    rightTopButton,
    middleValueIcon,
    value,
    cardType,
    isError,
}) => {
    const { t } = useTranslation();

    if (isError) {
        value = '-';
    }

    if (value === null) {
        return (
            <StyledLoadingBackground cardType={cardType} elevation={0}>
                <StyledCircularProgress size={128} />
            </StyledLoadingBackground>
        );
    }

    return (
        <StyledPaper cardType={cardType} elevation={0}>
            <Grid container>
                <TopCardGrid container item>
                    <TopLeftButtonOutline variant='rounded' cardType={cardType}>
                        {leftTopButton}
                    </TopLeftButtonOutline>
                    {rightTopButton}
                </TopCardGrid>
                <Grid container item>
                    <MiddleValuesGrid container item xs={6}>
                        <Grid item>
                            <MiddleValueTypography variant='h4'>${value}</MiddleValueTypography>
                        </Grid>
                        <Grid item>
                            <MiddleValueIconOutline>{middleValueIcon}</MiddleValueIconOutline>
                        </Grid>
                        <Grid container item>
                            <MiddleValueDownTypography variant='body1' cardType={cardType}>
                                {t(`dashboard.total${cardType}`)}
                            </MiddleValueDownTypography>
                        </Grid>
                    </MiddleValuesGrid>
                    <MiddleGraphContainer container item xs={6}>
                        {graph}
                    </MiddleGraphContainer>
                </Grid>
            </Grid>
        </StyledPaper>
    );
};
