import React, { useRef, useCallback, useState } from 'react';

import { FiLogIn, FiMail } from 'react-icons/fi';

import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Recuperação de senha

        await api.post('/password/forgot', { email: data.email });

        // adicionar parâmetros do toast:
        /*
        type: 'success',
        title: 'E-mail de recuperação enviado',
        description: 'Enviamos um email para confirmar a recuperação de senha. Cheque a sua caixa de entrada.'
        */
        // addToast();

        // history.push('/dashboard) adicionar depois
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        // adicionar parâmetros do toast:
        /*
        type: 'error',
        title: 'Error na recuperação de senha',
        description: 'Ocorreu um erro ao tentar realizar a recuperação de senha. Tente novamente.'
        */
        // addToast();
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );
  return (
    <Container>
      <Content>
        {/* Adicionar <AnimationContainer> */}
        <img src={logoImg} alt="Clynic" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button loading={loading} type="submit">
            Recuperar
          </Button>
        </Form>

        {/* Substituir tag a por Link. Configurar rota forgot password 02:20 aula criação página de recuperação nivel 5 */}
        <a href="/signin">
          <FiLogIn />
          Voltar ao login
        </a>

        {/* Adicionar <AnimationContainer> */}
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
