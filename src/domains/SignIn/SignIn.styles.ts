import { styled } from '@mui/material';
import { Paper } from '@mui/material';
import { LoadingButton } from '../../shared/components/LoadingButton/LoadingButton';

export const PageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100dvh',
    backgroundColor: theme.palette.grey[100],
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '320px',
    height: '380px',
}));

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(2),
}));
