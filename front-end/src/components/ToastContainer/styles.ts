import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}
export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

const toatsTypeVariations = {
  info: css`
    background: #ffb8df;
    color: #851954;
  `,

  success: css`
    background: #b8ffed;
    color: #1a474b;
  `,

  error: css`
    background: #fe8181;
    color: #6a0000;
  `,
};

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  background: #fcb6eb;
  color: #920270;

  ${props => toatsTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 18px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
            align-items: center;

            svg {
                margin-top: 0;
            }
    ,`}
`;
