import { StyledBox, StyledPaper, SignInContainer, SignInButton } from './SignInForm.styles';
import { Typography, TextField, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    interface UserForm {
        login: string;
        password: string;
    }
    const [userForm, setUserForm] = useState<UserForm>({ login: '', password: '' });
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const fetchUserData = async (): Promise<UserForm> => {
        const data = await fetch('./mockUser.json').then((res) => res.json());
        return data;
    };

    const userData = useQuery('userData', fetchUserData).data;
    const onChangeSignInHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserForm({ ...userForm, login: value });
    };

    const onChangePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserForm({ ...userForm, password: value });
    };

    const signInHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (userData && userForm && userData?.login === userForm.login && userData?.password === userForm.password) {
            queryClient.setQueryData('loggedUser', userData);
            navigate('/');
        } else {
            setWrongCredentials(true);
        }
    };

    return (
        <SignInContainer maxWidth='xl'>
            <StyledBox>
                <StyledPaper>
                    <Typography> Sign In</Typography>
                    <TextField
                        label='Login'
                        type='text'
                        onChange={onChangeSignInHandler}
                        value={userForm.login}
                        required
                        margin='normal'
                    />
                    <TextField
                        margin='normal'
                        name='password'
                        label='Password'
                        type='password'
                        required
                        onChange={onChangePasswordHandler}
                        value={userForm.password}
                    />
                    {wrongCredentials ? <Typography> Wrong Login or Password </Typography> : null}
                    <SignInButton variant='contained' onClick={signInHandler}>
                        Sign In
                    </SignInButton>
                </StyledPaper>
            </StyledBox>
        </SignInContainer>
    );
};
