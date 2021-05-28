import React, { ChangeEvent, useCallback, useRef } from 'react';
import {
  FiMail,
  FiUser,
  FiLock,
  FiCamera,
  FiArrowLeft,
  FiPower,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import avatarImg from '../../assets/avatar-clynic.png';
import { Container, Content, AvatarInput } from './styles';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser, signOut } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string().when('password', {
            is: old_password => !!old_password.length,
            then: Yup.string().required('Campo obrigatório'),
          }),
          password: Yup.string().test(
            'null || > 6',
            'Mínimo de 6 dígitos',
            password => (!password ? !data.old_password : password.length >= 6),
          ),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta')
            .when('old_password', {
              is: old_password => !!old_password.length,
              then: Yup.string().required('Campo obrigatório'),
            }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, old_password, password, password_confirmation } =
          data;

        const formData = {
          name,
          email,
          ...(old_password
            ? { old_password, password, password_confirmation }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações de perfil foram atualizadas com sucesso.',
        });

        history.push(user.provider ? '/dashboard' : '/providers');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro durante a atualização do perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateUser, user.provider],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to={user.provider ? '/dashboard' : '/providers'}>
            <FiArrowLeft />
          </Link>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </header>
      <Content>
        <AvatarInput>
          <img src={user.avatar_url || avatarImg} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </AvatarInput>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ name: user.name, email: user.email }}
        >
          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha atual"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button type="submit">Atualizar perfil</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
