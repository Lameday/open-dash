import { StyledBox, StyledPaper, SignInContainer, SignInButton } from './SignInForm.styles';
import { Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

export const SignIn = () => {
    interface UserForm {
        login: string;
        password: string;
    }
    const { register, handleSubmit } = useForm<UserForm>();
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const fetchUserData = async (): Promise<UserForm> => {
        const data = await fetch('./mockUser.json').then((res) => res.json());
        return data;
    };

    const userData = useQuery('userData', fetchUserData).data;

    const onSubmit: SubmitHandler<UserForm> = (data) => {
        if (userData && data && userData?.login === data.login && userData?.password === data.password) {
            queryClient.setQueryData('loggedUser', userData);
            navigate('/');
        } else {
            setWrongCredentials(true);
        }
    };

    const signInHandler = () => {
        handleSubmit(onSubmit)();
    };

    return (
        <SignInContainer maxWidth='xl'>
            <StyledBox>
                <StyledPaper>
                    <Typography variant='h3'> Sign In</Typography>
                    <TextField label='Login' type='text' required margin='normal' {...register('login')} />
                    <TextField label='Password' type='password' margin='normal' required {...register('password')} />
                    {wrongCredentials ? <Typography> Wrong Login or Password </Typography> : null}
                    <SignInButton variant='contained' onClick={handleSubmit(signInHandler)}>
                        Sign In
                    </SignInButton>
                </StyledPaper>
            </StyledBox>
        </SignInContainer>
    );
};
