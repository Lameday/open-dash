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
} from './BigTopDataCard.styles';

interface BigTopDataCardProps {
    graph?: ReactNode;
    leftTopButton?: ReactNode;
    rightTopButton?: ReactNode;
    middleValueIcon?: ReactNode;
    middleValueDownTypography?: ReactNode;
    containerbgcolor?: string;
    outlinebgcolor?: string;
    value?: number;
}

export const BigTopDataCard: FC<BigTopDataCardProps> = ({
    graph,
    leftTopButton,
    rightTopButton,
    middleValueIcon,
    middleValueDownTypography,
    containerbgcolor,
    outlinebgcolor,
    value,
}) => {
    return (
        <StyledPaper containerbgcolor={containerbgcolor} elevation={0}>
            <Grid container>
                <TopCardGrid container item>
                    <TopLeftButtonOutline outlinebgcolor={outlinebgcolor} variant='rounded'>
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
                            {middleValueDownTypography}
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
