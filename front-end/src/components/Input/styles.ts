import styled from 'styled-components';

export const Container = styled.div`
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
    input {
        flex: 1;
        background: transparent;
        border: none;
    }
    svg {
        margin-right: 16px;
    }
`;
