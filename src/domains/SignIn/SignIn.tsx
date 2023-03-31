import { PageContainer, StyledLoadingButton, StyledPaper } from '../SignIn/SignIn.styles';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useGetUserData } from './hooks/useGetUserData';

interface UserForm {
    login: string;
    password: string;
}

export const SignIn = () => {
    const { register, handleSubmit } = useForm<UserForm>();
    const { onSubmit, isLoading, isError } = useGetUserData();

    return (
        <PageContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledPaper>
                    <Typography variant='h3'> Sign In</Typography>
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
                    {isError && <Typography mt={2}> Wrong Login or Password </Typography>}
                    <StyledLoadingButton
                        isLoading={isLoading}
                        variant='contained'
                        type='submit'
                        color={isError ? 'error' : 'primary'}>
                        Sign in
                    </StyledLoadingButton>
                </StyledPaper>
            </form>
        </PageContainer>
    );
};
