import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing/Routing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
