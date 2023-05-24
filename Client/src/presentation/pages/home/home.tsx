/* eslint-disable react/no-unescaped-entities */
import { MatrixEffect } from '@/presentation/components';
import React, { useState } from 'react';
import {
  HomeContainer,
  MainSection,
  Header,
  AboutMe,
  AsideNavigation,
  ListMenuItem
} from './home-styles';

const Home = () => {
  const [state, setState] = useState({
    selectedMenu: 'home'
  });
  return (
    <HomeContainer>
      <MainSection>
        <MatrixEffect />
        <Header>
          <h1>Felipe Barreto</h1>
          <p>Software Developer</p>
        </Header>
        <AsideNavigation>
          <ul>
            <ListMenuItem
              selected={state.selectedMenu === 'home'}
              onClick={() => setState((old) => ({ ...old, selectedMenu: 'home' }))}>
              Home
            </ListMenuItem>
            <ListMenuItem
              selected={state.selectedMenu === 'projects'}
              onClick={() => setState((old) => ({ ...old, selectedMenu: 'projects' }))}>
              Projects
            </ListMenuItem>
            <ListMenuItem
              selected={state.selectedMenu === 'info'}
              onClick={() => setState((old) => ({ ...old, selectedMenu: 'info' }))}>
              Info
            </ListMenuItem>
            <ListMenuItem
              selected={state.selectedMenu === 'contact'}
              onClick={() => setState((old) => ({ ...old, selectedMenu: 'contact' }))}>
              Contact
            </ListMenuItem>
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
