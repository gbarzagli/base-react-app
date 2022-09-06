import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import { GlobalStyle } from './shared/styles/Global.styles';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
);
