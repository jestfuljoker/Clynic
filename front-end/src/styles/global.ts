import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       outline: 0;
    }

    body {
        background: #fff;
        color: #515151;
        --webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
    }

    button {
        cursor: pointer;
    }
`;
