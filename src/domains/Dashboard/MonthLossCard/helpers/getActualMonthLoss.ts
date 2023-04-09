interface Data {
    loss: number;
}

export const getActualMonthLoss = (data: Data[]): number => {
    const month = new Date().getMonth();
    return data[month - 1].loss;
};
