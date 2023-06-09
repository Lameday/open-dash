import { Navigate, useRoutes } from 'react-router-dom';
import { OpenDashboard } from '../domains/OpenDashboard/OpenDashboard';
import { NoAuth } from '../domains/NoAuth/NoAuth';
import { Layout } from '../shared/Layout/Layout';
import { AuthCheck } from '../shared/auth/AuthCheck';
import { SignIn } from '../domains/SignIn/SignIn';
import { ModuleOne } from '../domains/ModuleOne/ModuleOne';

export const Routing = () => {
    return useRoutes([
        {
            path: '/',
            element: <AuthCheck />,
            children: [
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
            ],
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
    ]);
};
