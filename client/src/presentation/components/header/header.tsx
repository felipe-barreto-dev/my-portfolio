import React from 'react';
import {
  HeaderContainer,
  CoverContainer,
  TopContainer,
  Brand,
  NavArea,
  NavItem
} from './header-styles';
import DarkBrand from '@/presentation/assets/svgs/brand-black-theme.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CoverContainer>
        <TopContainer>
          <Brand>
            <DarkBrand />
          </Brand>
          <NavArea>
            <NavItem>Projetos</NavItem>
          </NavArea>
        </TopContainer>
      </CoverContainer>
    </HeaderContainer>
  );
};

export default Header;
