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
  margin-left: ${(props) => props.left + 'px'};
  font-size: ${(props) => (props.size ? props.size + 'rem' : '1.5rem')};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

export const PersonalInfo = styled.section`
  margin-top: 50px;
  background-color: #23395b;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 20px 70px;
`;

export const SeparatorLine = styled.hr`
  margin: 50px 20px;
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Projects = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 4.5%;
`;

export const Project = styled.div`
  background-color: #23395b;
  display: grid;
  border-radius: 12px;
  padding: 20px;
  gap: 10px;

  div {
    display: flex;
    justify-content: end;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
