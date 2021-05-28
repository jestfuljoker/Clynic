import React from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';

import { Container } from './styles';

interface ICalendarProps {
  selectedDate: Date;
  disabledDays: Date[];
  handleDateChange: (day: Date, modifiers: DayModifiers) => void;
  handleMonthChange: (month: Date) => void;
}

const Calendar: React.FC<ICalendarProps> = ({
  disabledDays,
  selectedDate,
  handleDateChange,
  handleMonthChange,
}) => {
  return (
    <Container>
      <DayPicker
        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        fromMonth={new Date()}
        disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
        modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
        onDayClick={handleDateChange}
        onMonthChange={handleMonthChange}
        selectedDays={selectedDate}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
      />
    </Container>
  );
};

export default Calendar;
