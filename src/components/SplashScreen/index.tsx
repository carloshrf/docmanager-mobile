import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Image } from './styles';

const SplashScreen: React.FC = () => (
  <Container>
    <Image source={logoImg} />
  </Container>
);

export default SplashScreen;
