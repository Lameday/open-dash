import { FC, ReactNode } from 'react';
import React from 'react';
import { ButtonProps, CircularProgress } from '@mui/material';
import { StyledButton } from './LoadingButton.styles';

interface LoadingButtonProps extends ButtonProps {
    fontSize?: number;
    lineHeight?: number;
    isLoading: boolean;
    children: ReactNode;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
    fontSize = 14,
    lineHeight = 1.75,
    isLoading,
    children,
    ...rest
}) => {
    return (
        <StyledButton {...rest} fontSize={fontSize} lineHeight={lineHeight} disabled={isLoading}>
            {isLoading ? <CircularProgress size={fontSize * lineHeight} color='primary' /> : children}
        </StyledButton>
    );
};
