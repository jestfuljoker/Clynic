import React from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  console.log(user);
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Clynic" />

          <Profile>
            <img // {user.avatar_url}  //{user.name}
              src="https://avatars.githubusercontent.com/u/72576725?v=4"
              alt="Maria Eduarda"
            />
            <div>
              <span>Bem-vindo(a),</span>
              <strong>Maria Eduarda</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars.githubusercontent.com/u/72576725?v=4"
                alt="Maria Eduarda"
              />

              <strong>Maria Eduarda</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
