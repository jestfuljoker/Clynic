import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    height: 144px;
    background: #38506c;
    padding: 32px;

    display: flex;
    align-items: center;

    div {
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      svg {
        color: #ffffff;
        width: 24px;
        height: 24px;
      }

      button {
        background-color: transparent;
        border: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;

  form {
    margin: 32px;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-top: 80px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #fc5bb3;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#FC5BB3')};
    }
  }
`;
