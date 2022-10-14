import React from 'react';
import {
  HeaderContainer,
  CoverContainer,
  TopContainer,
  Brand,
  NavArea,
  NavItem,
  ProfileContainer,
  ProfilePicture,
  ProfileInfo,
  VisitGithub
} from './header-styles';
import DarkBrand from '@/presentation/assets/svgs/brand-black-theme.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CoverContainer>
        <TopContainer>
          <Brand>
            <img src={DarkBrand} />
          </Brand>
          <NavArea>
            <NavItem>Projetos</NavItem>
          </NavArea>
        </TopContainer>
      </CoverContainer>
      <ProfileContainer>
        <ProfilePicture></ProfilePicture>
        <ProfileInfo>
          <span>Felipe Barreto Pereira</span>
          <p>Frontend & Backend</p>
        </ProfileInfo>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
