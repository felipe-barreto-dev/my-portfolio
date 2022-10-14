import Layout from '@/presentation/layout/layout';
import React from 'react';
import { AboutMe, Container, PersonalInfo, Text, Title } from './home-styles';

const Home = () => {
  return (
    <Layout>
      <Container>
        <AboutMe>
          <Title>About Me</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium
          </Text>
        </AboutMe>
        <PersonalInfo>
          <div>
            <Title size={1.2}>Location</Title>
            <Text>São Paulo, Brasil</Text>
          </div>
          <div>
            <Title size={1.2}>Job</Title>
            <Text>Developer</Text>
          </div>
          <div>
            <Title size={1.2}>E-mail</Title>
            <Text>fbarreto.dev@gmail.com</Text>
          </div>
        </PersonalInfo>
      </Container>
    </Layout>
  );
};

export default Home;
