import { FC, useEffect, ReactNode } from 'react';
import { useQueryClient } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';

interface AuthCheckProps {
    children: ReactNode;
}

export const AuthCheck: FC<AuthCheckProps> = ({ children }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData('loggedUser');
    useEffect(() => {
        if (!userData) {
            navigate('/noauth');
        }
    }, [navigate, userData]);
    return <>{children}</>;
};
