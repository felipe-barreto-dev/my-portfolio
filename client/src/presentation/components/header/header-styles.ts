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
`;

export const Brand = styled.div`
  img {
    margin-left: -10px;
  }
`;

export const NavArea = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li``;

export const ProfileContainer = styled.div`
  display: flex;
  padding: 0px 7vw;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;

  span {
    font-size: 24px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ProfilePicture = styled.div`
  background-image: url('https://github.com/felipe-barreto-dev.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid white;
  margin-top: -60px;
`;

export const VisitGithub = styled.div``;
