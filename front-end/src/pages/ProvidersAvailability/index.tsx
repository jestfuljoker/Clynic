import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import { DayModifiers } from 'react-day-picker';
import { FiArrowLeft, FiPower } from 'react-icons/fi';
import { format, isToday, isTomorrow } from 'date-fns'; // eslint-disable-line import/no-duplicates
import { ptBR } from 'date-fns/locale'; // eslint-disable-line import/no-duplicates

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Modal from '../../components/Modal';
import Calendar from '../../components/Calendar';
import Button from '../../components/Button/index';
import 'react-day-picker/lib/style.css';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar-clynic.png';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Availability,
  Section,
  BookAppointmentButton,
} from './styles';

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface Availability {
  day: number;
  hour: number;
  available: boolean;
}

interface MonthAvailability {
  day: number;
  available: boolean;
}

const Providers: React.FC = () => {
  const { signOut, user } = useAuth();
  const { addToast } = useToast();
  const { params } = useRouteMatch<Provider>();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dayAvailability, setDayAvailability] = useState<Availability[]>([]);
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailability[]
  >([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api
      .get(`providers/${params.id}/day-availability`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then(response => {
        setDayAvailability(response.data);
      });
  }, [params, selectedDate]);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available && !modifiers.disabled) setSelectedDate(day);
      if (modalOpen) setModalOpen(!modalOpen);
    },
    [modalOpen],
  );

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const handleCreateAppointment = useCallback(
    async (hour: number) => {
      try {
        const date = new Date(selectedDate);

        const timezoneHourAdjust =
          process.env.NODE_ENV === 'development'
            ? 0
            : date.getTimezoneOffset() / 60;

        date.setHours(hour - timezoneHourAdjust);
        date.setMinutes(0);

        setSelectedDate(date);

        await api.post('/appointments', {
          date,
          provider_id: params.id,
        });

        const updatedDayAvailability = dayAvailability.map(availability => {
          if (availability.hour === hour) {
            Object.assign(availability, { available: false });
          }
          return availability;
        });
        setDayAvailability(updatedDayAvailability);

        const formattedDate = format(date, "'dia' dd 'de' MMMM", {
          locale: ptBR,
        });

        addToast({
          type: 'success',
          title: 'Agendamento concluído!',
          description: `Seu atendimento foi marcado para ${formattedDate} às ${hour}:00.`,
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao criar agendamento!',
          description:
            'Ocorreu um erro na criação do agendamento, tente novamente',
        });
      }
    },
    [addToast, dayAvailability, params.id, selectedDate],
  );

  const morningAvailability = useMemo(() => {
    return dayAvailability.filter(availability => availability.hour < 12);
  }, [dayAvailability]);

  const afternoonAvailability = useMemo(() => {
    return dayAvailability.filter(availability => availability.hour >= 12);
  }, [dayAvailability]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Clynic" />

          <Profile>
            <Link to="/profile">
              <img src={user.avatar_url || avatarImg} alt={user.name} />
            </Link>
            <div>
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <Calendar
          disabledDays={disabledDays}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          handleMonthChange={handleMonthChange}
        />
      </Modal>

      <Content>
        <Availability>
          <span>
            <Link to={user.provider ? '/dashboard' : '/providers'}>
              <FiArrowLeft />
              Voltar
            </Link>

            <Button type="button" onClick={toggleModal}>
              Alterar data
            </Button>
          </span>

          <h1>Selecione um horário</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            {isTomorrow(selectedDate) && <span>Amanhã</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          <Section>
            <strong>Manhã</strong>
            {morningAvailability &&
            morningAvailability.some(({ available }) => available === true) ? (
              <div>
                {morningAvailability?.map(({ hour, available }) => (
                  <BookAppointmentButton
                    key={hour}
                    type="submit"
                    disabled={!available}
                    selected={selectedDate.getHours() === hour}
                    onClick={() => handleCreateAppointment(hour)}
                  >
                    <strong>
                      {hour}
                      :00
                    </strong>
                  </BookAppointmentButton>
                ))}
              </div>
            ) : (
              <p>Nenhum horário disponível neste período.</p>
            )}
          </Section>

          <Section>
            <strong>Tarde</strong>
            {afternoonAvailability &&
            afternoonAvailability.some(
              ({ available }) => available === true,
            ) ? (
              <div>
                {afternoonAvailability?.map(({ hour, available }) => (
                  <BookAppointmentButton
                    key={hour}
                    type="submit"
                    disabled={!available}
                    selected={selectedDate.getHours() === hour}
                    onClick={() => handleCreateAppointment(hour)}
                  >
                    <strong>
                      {hour}
                      :00
                    </strong>
                  </BookAppointmentButton>
                ))}
              </div>
            ) : (
              <p>Nenhum horário disponível neste período.</p>
            )}
          </Section>
        </Availability>

        <aside>
          <Calendar
            disabledDays={disabledDays}
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            handleMonthChange={handleMonthChange}
          />
        </aside>
      </Content>
    </Container>
  );
};

export default Providers;
