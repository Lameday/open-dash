import { useQuery } from '@tanstack/react-query';
import { getDashboardValues } from '../helpers/getDashboardValues';

interface OrderArray {
    name: string;
    order: number;
}
interface PlaceHolderArray {
    name: string;
    profit: number;
}

interface DashboardValuesProps {
    orderArray: OrderArray[];
    orderTotal: number;
    earningTotal: number;
    incomeTotal: number;
    placeHolderArray: PlaceHolderArray[];
}
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
    let dashboardValues: DashboardValuesProps = {
        orderArray: [],
        orderTotal: 0,
        earningTotal: 0,
        incomeTotal: 0,
        placeHolderArray: [],
    };
    if (isSuccess) {
        dashboardValues = getDashboardValues(data);
    }

    return { dashboardValues, isError, isLoading };
};
