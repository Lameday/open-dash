import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing/Routing';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthCheck } from './Routing/AuthCheck';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthCheck>
                    <Routing />
                </AuthCheck>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
