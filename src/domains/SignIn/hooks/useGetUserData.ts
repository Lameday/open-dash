import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '../../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../helpers/getUserData';
import { UserData, LoginData } from '../model/UserData';

export const useGetUserData = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();
    const { mutate, isLoading, isError, data } = useMutation<UserData, boolean, LoginData>(getUserData);

    if (data) {
        setUser(data);
        navigate('/dashboard');
    }

    return { mutate, isLoading, isError };
};
