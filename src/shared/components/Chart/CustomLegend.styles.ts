import { styled } from '@mui/material/styles';

export const Legend = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}));

export const LegendItem = styled('div')(() => ({
    display: 'flex',
}));

export const LegendItemSymbol = styled('div')(({ theme }) => ({
    display: 'flex',
    marginLeft: theme.spacing(2),
    alignItems: 'center',
}));

export const LegendItemValue = styled('div')(({ color }) => ({
    color: color,
}));
