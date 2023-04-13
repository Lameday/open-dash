import { FC, ReactNode, createContext } from 'react';
import { data } from '../utility/data';

export const DashBoardDataContext = createContext<any>([]);

interface DashboardDataProps {
    children?: ReactNode;
}

export const DashBoardDataProvider: FC<DashboardDataProps> = ({ children }) => {
    const contextValue: any = data;

    return <DashBoardDataContext.Provider value={contextValue}>{children}</DashBoardDataContext.Provider>;
};
