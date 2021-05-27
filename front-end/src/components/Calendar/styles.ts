import styled from 'styled-components';
import { shade } from 'polished';
import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

export const Container = styled.div`
  width: 360px;

  .DayPicker {
    border-radius: 0.6rem;
    font-size: 16px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #38506c;
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: #d7f6f8;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #dee2e6;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #666360;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3fc1c9;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3FC1C9')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fc5bb3;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #fc5bb3 !important;
    border-radius: 0.6rem;
    color: #232129 !important;
    font-weight: 500;
  }
`;
