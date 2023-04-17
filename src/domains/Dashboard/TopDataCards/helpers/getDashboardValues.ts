// orderArray: [],
// orderTotal: 0,
// earningTotal: 0,
// incomeTotal: 0,

interface Data {
    name: string;
    investment: number;
    order: number;
    profit: number;
}

export const getDashboardValues = (data: Data[]) => {
    const orderArray = data.map(({ name, order }) => ({ name, order }));
    const placeHolderArray = data.map(({ name, profit }) => ({ name, profit }));
    const orderTotal = data.reduce((acc, { order }) => acc + order, 0);
    const earningTotal = data.reduce((acc, { profit }) => acc + profit, 0);
    const incomeTotal = data.reduce((acc, item) => acc + item.profit + item.order, 0);
    return { orderArray, orderTotal, earningTotal, incomeTotal, placeHolderArray };
};
