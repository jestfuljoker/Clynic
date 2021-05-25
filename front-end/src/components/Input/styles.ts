import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #eee;
    border-radius: 10px;
    border: 2px solid #eee;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }
    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #fc5bb3;
            border-color: #fc5bb3;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #fc5bb3;
        `}


    input {
        flex: 1;
        background: transparent;
        border: none;
    }
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    margin-left: 5px;
    svg {
        margin: 0;
    }

    span {
        background-color: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
