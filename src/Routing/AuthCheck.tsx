import { useQueryClient } from 'react-query';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthCheck = () => {
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData('loggedUser');
    if (!userData) {
        return <Navigate to='sign-in' />;
    }
    return <Outlet />;
};
