import { Navigate, useRoutes } from 'react-router-dom';
import { OpenDashboard } from '../modules/OpenDashboard/OpenDashboard';
import { NoAuth } from './NoAuth';
import { Layout } from '../shared/Layout/Layout';
import { ModuleOne } from '../modules/ModuleOne/ModuleOne';

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
                {
                    path: '/moduleone',
                    element: <ModuleOne />,
                },
            ],
        },
    ]);
};
