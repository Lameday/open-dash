import { theme } from '../../../../../../shared/theme/theme';

export const getCardColor = (cardType?: string): string => {
    let cardColor = '';
    if (cardType === 'Order') {
        cardColor = theme.palette.secondary.main;
    } else if (cardType === 'Earning') {
        cardColor = theme.palette.secondary.dark;
    }
    return cardColor;
};
