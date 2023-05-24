import { styled } from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainSection = styled.main`
  display: flex;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  border: 1px solid #ccc;
`;

export const Header = styled.header`
  position: fixed;
  margin: 24px;
  color: #fff;
  background-color: initial;

  h1 {
    background-color: initial;
    font-weight: 100;
    font-size: 3em;
  }

  p {
    background-color: initial;
    font-weight: 500;
    font-size: 1em;
    margin-left: 6px;
  }
`;

export const AboutMe = styled.section`
  position: absolute;
  margin: 24px;
  color: #fff;
  background-color: initial;
  display: flex;
  flex-direction: column;
  left: calc(100% - 300px);
  top: calc(100% - 280px);

  span {
    background-color: initial;
    font-weight: 500;
    font-size: 1em;
    line-height: 1.5em;
  }
`;

export const AsideNavigation = styled.nav`
  position: fixed;
  color: #fff;
  background-color: initial;
  margin: 150px 47px;

  ul {
    background-color: initial;
  }

  li {
    background-color: initial;
    font-weight: 500;
    font-size: 1em;
    line-height: 2em;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      transform: scale(1.2);
      color: #0f0;
    }
  }
`;
