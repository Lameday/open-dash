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
import { CardType } from '../../TopDataCards';

interface BigTopDataCardProps {
    graph?: ReactNode;
    leftTopButton?: ReactNode;
    rightTopButton?: ReactNode;
    middleValueIcon?: ReactNode;
    value?: number | string | ReactNode;
    cardType?: CardType;
}

export const BigTopDataCard: FC<BigTopDataCardProps> = ({
    graph,
    leftTopButton,
    rightTopButton,
    middleValueIcon,
    value,
    cardType,
}) => {
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
                                Total {cardType}
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
