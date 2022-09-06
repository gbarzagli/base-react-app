import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        /* converting 1rem to 10px */
        font-size: 62.5%;
    }
`;
