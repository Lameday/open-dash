import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import {
    StyledPaper,
    TopCardGrid,
    TopLeftButtonOutline,
    MiddleValuesGrid,
    MiddleValueTypography,
    MiddleValueIconOutline,
    MiddleGraphContainer,
    MiddleValueDownTypography,
} from './BigTopDataCard.styles';
import { getCardColor } from './helpers/getCardColor';

interface BigTopDataCardProps {
    graph?: ReactNode;
    leftTopButton?: ReactNode;
    rightTopButton?: ReactNode;
    middleValueIcon?: ReactNode;
    middleValueDownTypography?: ReactNode;
    containerbgcolor?: string;
    outlinebgcolor?: string;
    value?: number;
    cardType?: string;
}

export const BigTopDataCard: FC<BigTopDataCardProps> = ({
    graph,
    leftTopButton,
    rightTopButton,
    middleValueIcon,
    value,
    cardType,
}) => {
    const cardColor = getCardColor(cardType);

    return (
        <StyledPaper containerbgcolor={cardColor} elevation={0}>
            <Grid container>
                <TopCardGrid container item>
                    <TopLeftButtonOutline variant='rounded'>{leftTopButton}</TopLeftButtonOutline>
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
                            <MiddleValueDownTypography variant='body1'>Total {cardType}</MiddleValueDownTypography>
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
