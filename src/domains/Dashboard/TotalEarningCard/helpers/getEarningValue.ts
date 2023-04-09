interface Data {
    profit: number;
}

export const getEarningValue = (data: Data[]): number => {
    return data.reduce((acc, val) => acc + val.profit, 0);
};
