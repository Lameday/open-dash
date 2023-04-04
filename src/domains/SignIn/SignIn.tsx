import {
    StyledLoadingButton,
    StyledPaper,
    StyledContainer,
    StyledIcon,
    StyledErrorMessage,
} from '../SignIn/SignIn.styles';
import { TextField, Typography, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useGetUserData } from './hooks/useGetUserData';
import { LoginData } from './model/UserData';

export const SignIn = () => {
    const theme = useTheme();
    const { register, handleSubmit } = useForm<LoginData>();
    const { mutate, isLoading, isError } = useGetUserData();
    console.log(theme);
    return (
        <StyledContainer disableGutters maxWidth='xs'>
            <form onSubmit={handleSubmit((loginData) => mutate(loginData))}>
                <StyledPaper>
                    <StyledIcon />
                    <Typography variant='h3'> Welcome </Typography>
                    <Typography variant='h6'>Please login to continue</Typography>
                    <TextField
                        error={isError}
                        fullWidth
                        label='Login'
                        type='text'
                        required
                        margin='normal'
                        {...register('login')}
                    />
                    <TextField
                        error={isError}
                        fullWidth
                        label='Password'
                        type='password'
                        margin='normal'
                        required
                        {...register('password')}
                    />

                    <StyledLoadingButton
                        isLoading={isLoading}
                        variant='contained'
                        type='submit'
                        color={isError ? 'error' : 'primary'}>
                        Sign in
                    </StyledLoadingButton>
                    {isError && (
                        <StyledErrorMessage variant='h6' margin='normal' color='red'>
                            AuthError: Please check your credentials
                        </StyledErrorMessage>
                    )}
                </StyledPaper>
            </form>
        </StyledContainer>
    );
};
