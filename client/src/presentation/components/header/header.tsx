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
  VisitGithub,
  ProfileInfoContainer
} from './header-styles';
import DarkBrand from '@/presentation/assets/svgs/brand-black-theme.svg';

const Header: React.FC = () => {
  const goToGithub = () => {
    window.open('https://github.com/felipe-barreto-dev');
  };

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
        <ProfileInfoContainer>
          <ProfilePicture />
          <ProfileInfo>
            <span>Felipe Barreto Pereira</span>
            <p>Frontend & Backend</p>
          </ProfileInfo>
        </ProfileInfoContainer>
        <VisitGithub onClick={goToGithub}>Visit Github</VisitGithub>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
