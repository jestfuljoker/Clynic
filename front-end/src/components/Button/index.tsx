import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

<<<<<<< HEAD
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
=======
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
>>>>>>> c4fccf3b77b9eb3e8ee79ff79c27bccaa450a897
  </Container>
);

export default Button;
