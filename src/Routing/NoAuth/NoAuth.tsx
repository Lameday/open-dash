import { StyledPaper, StyledButton, StyledContainer, StyledIcon, StyledErrorMessage } from './NoAuth.styles';
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
        <StyledContainer disableGutters maxWidth='xs'>
            <StyledPaper>
                <StyledIcon />
                <Typography variant='h3'> Welcome </Typography>
                <Typography variant='h6'>Please login to continue</Typography>
                <TextField label='Login' type='text' required margin='normal' fullWidth {...register('login')} />
                <TextField
                    label='Password'
                    type='password'
                    margin='normal'
                    fullWidth
                    required
                    {...register('password')}
                />
                {/* {isLoading ? <Typography> Loading Circle (todo) </Typography> : null} */}
                <StyledButton variant='contained' size='large' onClick={handleSubmit(signInHandler)}>
                    Sign In
                </StyledButton>
                {isError && (
                    <StyledErrorMessage variant='h6' margin='normal' color='red'>
                        AuthError: Please check your credentials
                    </StyledErrorMessage>
                )}
            </StyledPaper>
        </StyledContainer>
    );
};
