import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export const AuthCheck = () => {
    const { userData } = useUserStore();
    console.log('data', userData);

    if (!userData) {
        return <Navigate to='sign-in' />;
    }

    return <Outlet />;
};
