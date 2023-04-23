import { TopDataCardsBackendForm, TopDataCardsFrontendValues } from '../model/TopDataCards.model';

export const getTopDataCardsValues = (
    data: TopDataCardsBackendForm[] | undefined,
): TopDataCardsFrontendValues | null => {
    if (!data) {
        return null;
    }

    return {
        orderArray: data.map(({ name, order }) => ({ name, order })),
        orderTotal: data.reduce((acc, { order }) => acc + order, 0),
        earningTotal: data.reduce((acc, { profit }) => acc + profit, 0),
        incomeTotal: data.reduce((acc, item) => acc + item.profit + item.order, 0),
    };
};
