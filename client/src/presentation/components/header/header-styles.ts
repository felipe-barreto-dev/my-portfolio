import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

export const CoverContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, #23395b 0%, rgba(252, 252, 252, 0.2) 100%);
`;

export const TopContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 30px 7vw;

  @media (max-width: 647px) {
    padding: 30px 3vw;
  }
`;

export const Brand = styled.div`
  img {
    margin-left: -10px;
  }

  @media (max-width: 450px) {
    img {
      transform: scale(0.9);
      margin-left: -25px;
    }
  }
`;

export const NavArea = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li``;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 7vw;

  @media (max-width: 647px) {
    padding: 0px 2vw;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #a39d9d;
  }

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const ProfilePicture = styled.div`
  background-image: url('https://github.com/felipe-barreto-dev.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 200px;
  min-width: 200px;
  height: 200px;
  min-height: 200px;
  border-radius: 50%;
  border: 1px solid white;
  margin-top: -60px;

  @media (max-width: 768px) {
    min-width: 150px;
    width: 150px;
    min-height: 150px;
    height: 150px;
    margin-top: -40px;
  }

  @media (max-width: 450px) {
    margin-top: -80px;
  }
`;

export const VisitGithub = styled.button`
  background-color: #23395b;
  padding: 10px 25px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-color: #3498db;
  transition: all 150ms ease-in-out;
  border: 1px solid rgba(125, 125, 125, 0.7);

  &:hover {
    box-shadow: 0 0 10px 0 #ffde59 inset, 0 0 10px 4px #ffde59;
    border: 1px solid #ffde59;
  }

  @media (max-width: 647px) {
    display: none;
  }
`;
