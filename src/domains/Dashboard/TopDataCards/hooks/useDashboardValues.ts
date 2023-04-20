import { useQuery } from '@tanstack/react-query';
import { getDashboardValues } from '../helpers/getDashboardValues';

interface DashboardDataForm {
    name: string;
    investment: number;
    order: number;
    profit: number;
}

const fetchDashboardData = async (): Promise<DashboardDataForm[]> => {
    const res = await fetch('dashboardData.json');
    const data = res.json();
    if (res.ok) {
        return data;
    } else {
        throw new Error('Failed to fetch dashboard data');
    }
};

export const useDashboardValues = () => {
    const { data, isError, isLoading, isSuccess } = useQuery({
        queryKey: ['dashboardData'],
        queryFn: fetchDashboardData,
    });

    if (isSuccess) {
        const dashboardValues = getDashboardValues(data);
        return { dashboardValues, isError, isLoading, isSuccess };
    }

    return { isError, isLoading, isSuccess };
};
