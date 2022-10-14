import React, { PropsWithChildren } from 'react';
import { Footer, Header } from '../components';
import { Container } from './layout-styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
