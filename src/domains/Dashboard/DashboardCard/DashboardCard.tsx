import { FC, ReactNode } from 'react';
import { DashboardCardPaper } from './DashboardCardPaper.styles';

interface DashboardCardProps {
    children?: ReactNode;
}

export const DashboardCard: FC<DashboardCardProps> = ({ children }) => {
    return <DashboardCardPaper elevation={0}>{children}</DashboardCardPaper>;
};
