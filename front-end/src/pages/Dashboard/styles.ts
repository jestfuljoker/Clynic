import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #f0f0f0;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #535353;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    &:hover {
      opacity: 0.9;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    span {
      color: #38506c;
    }
    strong {
      color: #fc5bb3;
    }
    a {
      text-decoration: none;
      color: #fc5bb3;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #fc5bb3;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #fc5bb3;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #38506c;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      color: #eee;
      display: flex;
      align-items: center;

      svg {
        color: #fc5bb3;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #fda0d3;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    color: #535353;
    font-weight: 700;
    display: flex;
    align-items: center;

    svg {
      color: #fc5bb3;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #38506c;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;
