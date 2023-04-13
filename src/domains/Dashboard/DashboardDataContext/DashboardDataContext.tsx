import { FC, ReactNode, createContext } from 'react';
import { getDashboardValues } from './getDashboardValues';

const data = [
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

interface OrderArray {
    name: string;
    order: number;
}
interface DashboardProviderProps {
    children?: ReactNode;
    orderArray: OrderArray[];
    orderTotal: number;
    earningTotal: number;
    incomeTotal: number;
}

export const DashBoardDataContext = createContext<DashboardProviderProps>({
    orderArray: [],
    orderTotal: 0,
    earningTotal: 0,
    incomeTotal: 0,
});

export const DashBoardDataProvider: FC<DashboardProviderProps> = ({ children }) => {
    const dashboardData: DashboardProviderProps = getDashboardValues(data);
    return <DashBoardDataContext.Provider value={dashboardData}>{children}</DashBoardDataContext.Provider>;
};
