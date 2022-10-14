import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px 7vw;
`;

export const AboutMe = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;

  span {
    flex: 1;
  }

  p {
    flex: 3;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: ${(props) => (props.size ? props.size + 'rem' : '1.5rem')};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

export const PersonalInfo = styled.div`
  margin-top: 50px;
  background-color: #23395b;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 20px 70px;
`;
