import { StyledBox, StyledPaper } from './SignInForm.styles';
import { Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

export const SignIn = () => {
    interface UserForm {
        login: string;
        password: string;
    }
    const [userForm, setUserForm] = useState<UserForm>({ login: '', password: '' });
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);

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
            // eslint-disable-next-line no-console
            console.log('user logged in');
        } else {
            // eslint-disable-next-line no-console
            console.log('wrong login/password');
            setWrongCredentials(true);
        }
    };

    return (
        <StyledBox>
            <StyledPaper>
                <Typography> Sign In</Typography>
                <TextField label={'Login'} type='text' onChange={onChangeSignInHandler} value={userForm.login} />
                <TextField
                    label={'Password'}
                    type='password'
                    onChange={onChangePasswordHandler}
                    value={userForm.password}
                />
                {wrongCredentials ? <Typography> Wrong Login or Password </Typography> : <Typography></Typography>}
                <Button variant='contained' onClick={signInHandler}>
                    {' '}
                    LogIn
                </Button>
            </StyledPaper>
        </StyledBox>
    );
};
