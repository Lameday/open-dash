import { useQuery } from '@tanstack/react-query';
import { getTopDataCardsValues } from '../helpers/getTopDataCardsValues';
import { DataType } from '../enum/TopDataCards.enum';
import { TopDataCardsBackendForm } from '../model/TopDataCards.model';

const dataYear = [
    { name: 'January', investment: 35, order: 35, profit: 35 },
    { name: 'February', investment: 125, order: 15, profit: 145 },
    { name: 'March', investment: 35, order: 15, profit: 35 },
    { name: 'April', investment: 35, order: 35, profit: 35 },
    { name: 'May', investment: 35, order: 65, profit: 20 },
    { name: 'June', investment: 80, order: 40, profit: 105 },
    { name: 'July', investment: 35, order: 80, profit: 100 },
    { name: 'August', investment: 20, order: 25, profit: 10 },
    { name: 'September', investment: 35, order: 15, profit: 65 },
    { name: 'October', investment: 45, order: 85, profit: 45 },
    { name: 'November', investment: 15, order: 25, profit: 30 },
    { name: 'December', investment: 75, order: 75, profit: 10 },
];

const dataMonth = [
    { name: '1', investment: 35, order: 3, profit: 35 },
    { name: '2', investment: 125, order: 1, profit: 145 },
    { name: '3', investment: 35, order: 1, profit: 35 },
    { name: '4', investment: 35, order: 3, profit: 35 },
    { name: '5', investment: 35, order: 6, profit: 20 },
    { name: '6', investment: 80, order: 4, profit: 105 },
    { name: '7', investment: 35, order: 8, profit: 100 },
    { name: '8', investment: 20, order: 2, profit: 10 },
    { name: '9', investment: 35, order: 1, profit: 65 },
    { name: '10', investment: 45, order: 8, profit: 45 },
    { name: '11', investment: 15, order: 2, profit: 30 },
    { name: '12', investment: 75, order: 7, profit: 10 },
    { name: '13', investment: 35, order: 3, profit: 35 },
    { name: '14', investment: 125, order: 1, profit: 145 },
    { name: '15', investment: 35, order: 1, profit: 35 },
    { name: '16', investment: 35, order: 3, profit: 35 },
    { name: '17', investment: 35, order: 6, profit: 20 },
    { name: '18', investment: 80, order: 4, profit: 105 },
    { name: '19', investment: 35, order: 8, profit: 100 },
    { name: '20', investment: 20, order: 2, profit: 10 },
    { name: '21', investment: 35, order: 1, profit: 65 },
    { name: '22', investment: 45, order: 8, profit: 45 },
    { name: '23', investment: 15, order: 2, profit: 30 },
    { name: '24', investment: 75, order: 7, profit: 10 },
    { name: '25', investment: 35, order: 3, profit: 35 },
    { name: '26', investment: 125, order: 1, profit: 145 },
    { name: '27', investment: 35, order: 1, profit: 35 },
    { name: '28', investment: 35, order: 3, profit: 35 },
    { name: '29', investment: 35, order: 6, profit: 20 },
    { name: '30', investment: 80, order: 4, profit: 105 },
];

const fetchTopDataCardsData = async (dataType: DataType | undefined): Promise<TopDataCardsBackendForm[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dataType === DataType.Month) {
                resolve(dataMonth);
            }
            if (dataType === DataType.Year) {
                resolve(dataYear);
            } else {
                reject(new Error('Error during fetch data'));
            }
        }, 1000);
    });
};

export const useTopDataCardsValues = (dataType: DataType) => {
    const { data, isError } = useQuery({
        queryKey: [`dashboardData${dataType}`],
        queryFn: () => fetchTopDataCardsData(dataType),
    });

    const dashboardValues = getTopDataCardsValues(data);
    return { dashboardValues, isError };
};
