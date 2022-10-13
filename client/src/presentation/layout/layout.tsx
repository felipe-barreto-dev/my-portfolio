import React, { PropsWithChildren } from 'react';
import Header from '../components/header/header';
import { Container } from './layout-styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
