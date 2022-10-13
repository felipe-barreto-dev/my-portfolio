import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
`;

export const CoverContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, #23395b 0%, rgba(252, 252, 252, 0.2) 100%);
`;

export const TopContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 30px 100px;
`;

export const Brand = styled.div`
  svg {
    transform: scale(0.9);
    margin-left: -15px;
  }
`;

export const NavArea = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li``;
