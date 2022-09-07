import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import { GlobalStyle } from './shared/styles/Global.styles';
import { StoresProvider } from './shared/contexts/StoresProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = document.getElementById('root') as HTMLElement;

const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <GlobalStyle />

        <QueryClientProvider client={queryClient}>
            <StoresProvider>
                <App />
            </StoresProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
