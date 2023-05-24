/* eslint-disable react/no-unescaped-entities */
import { MatrixEffect } from '@/presentation/components';
import React from 'react';
import { HomeContainer, MainSection, Header, AboutMe, AsideNavigation } from './home-styles';

const Home = () => {
  return (
    <HomeContainer>
      <MainSection>
        <MatrixEffect />
        <Header>
          <h1>Felipe Barreto</h1>
          <p>Web Developer</p>
        </Header>
        <AsideNavigation>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </AsideNavigation>
        <AboutMe>
          <span>Born in 2004</span>
          <span>in São Paulo, Brazil.</span>
          <span>I create impactful</span>
          <span>solutions using</span>
          <span>Typescript, React.js</span>
          <span>and React Native.</span>
          <span>Let's collaborate and</span>
          <span>make something great!</span>
        </AboutMe>
      </MainSection>
    </HomeContainer>
  );
};

export default Home;
