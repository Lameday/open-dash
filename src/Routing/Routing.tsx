import { Navigate, useRoutes } from 'react-router-dom';
import { OpenDashboard } from '../domains/OpenDashboard/OpenDashboard';
import { NoAuth } from '../domains/NoAuth/NoAuth';
import { Layout } from '../shared/Layout/Layout';

export const Routing = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Navigate to='/dashboard' />,
                },
                {
                    path: '/dashboard',
                    element: <OpenDashboard />,
                },
                {
                    path: '/noauth',
                    element: <NoAuth />,
                },
            ],
        },
    ]);
};
