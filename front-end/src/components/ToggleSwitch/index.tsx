import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  // const [provider, setProvider] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleChange = () => {
  //   setProvider(!provider);
  // };

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input type="checkbox" ref={inputRef} {...rest} />
      <span className="slider round" />
      <h2>{label}</h2>
    </Container>
  );
};

export default Input;
