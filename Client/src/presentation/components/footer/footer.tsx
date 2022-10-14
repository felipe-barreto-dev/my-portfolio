import React from 'react';
import { DevelopedBy, FooterContainer, Text } from './footer-styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Text>© Copyright Portfolio</Text>
      <Text>
        Developed by <DevelopedBy>felipe-barreto-dev</DevelopedBy>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
