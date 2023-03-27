import { Navigate, useRoutes } from 'react-router-dom';
import { OpenDashboard } from '../modules/OpenDashboard/OpenDashboard';
import { NoAuth } from './NoAuth';
import { Layout } from '../shared/Layout/Layout';
import { useQueryClient } from 'react-query';

export const Routing = () => {
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData('loggedUser');
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: userData
                ? [
                      {
                          index: true,
                          element: <Navigate to='/dashboard' />,
                      },
                      {
                          path: '/dashboard',
                          element: <OpenDashboard />,
                      },
                  ]
                : [
                      {
                          index: true,
                          element: <Navigate to='/noauth' />,
                      },
                      {
                          path: '/noauth',
                          element: <NoAuth />,
                      },
                      {
                          path: '*',
                          element: <Navigate to='/noauth' />,
                      },
                  ],
        },
    ]);
};
