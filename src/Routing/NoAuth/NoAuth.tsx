import { StyledBox, StyledPaper, SignInContainer, SignInButton } from './NoAuth.styles';
import { Typography, TextField } from '@mui/material';
import { useQuery, useQueryClient } from 'react-query';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface UserForm {
    login: string;
    password: string;
}

const fetchUserData = (login: string, password: string): Promise<UserForm> => {
    return new Promise<UserForm>((resolve, reject) => {
        fetch('./mockUser.json')
            .then((res) => res.json())
            .then((data) => {
                if (login === data.login && password === data.password) {
                    resolve(data);
                } else {
                    reject('wrong login/password');
                }
            });
    });
};

export const NoAuth = () => {
    const { register, handleSubmit, watch } = useForm<UserForm>();
    const queryClient = useQueryClient();
    const { login, password } = watch();
    const { refetch, isError, isLoading, isSuccess, data } = useQuery(
        'userData',
        () => fetchUserData(login, password),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: false,
        },
    );

    if (isSuccess) {
        queryClient.setQueryData('loggedUser', data);
        return <Navigate to='/' />;
    }

    const signInHandler = () => {
        refetch();
    };

    return (
        <SignInContainer maxWidth='xl'>
            <StyledBox>
                <StyledPaper>
                    <Typography variant='h3'> Sign In</Typography>
                    <TextField label='Login' type='text' required margin='normal' {...register('login')} />
                    <TextField label='Password' type='password' margin='normal' required {...register('password')} />
                    {isLoading ? <Typography> Loading Circle (todo) </Typography> : null}
                    {isError ? <Typography> Wrong Login or Password </Typography> : null}
                    <SignInButton variant='contained' onClick={handleSubmit(signInHandler)}>
                        Sign In
                    </SignInButton>
                </StyledPaper>
            </StyledBox>
        </SignInContainer>
    );
};
