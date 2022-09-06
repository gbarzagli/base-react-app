import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { StyledBaseProps } from './shared/interfaces/StyledBaseProps';

export const AppContainer = styled.div<StyledBaseProps>`
    display: flex;
    width: 100vw;
    height: 100vh;
    color: white;
    background: white;
`;

export const Button = styled(AntdButton)`
    display: flex;
    height: fit-content;
    min-width: fit-content;
    padding: 1rem;
    flex: 0 1 auto;
`;
