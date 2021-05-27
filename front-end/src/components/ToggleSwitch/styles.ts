import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: flex;
  height: 34px;
  margin: 10px 46px 0 46px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    width: 60px;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #38506c;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #f4ede8;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #fc5bb3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  h2 {
    margin-left: 72px;
    color: #38506c;
  }
`;
