import React from 'react';
import { Image } from 'react-native';

import { Contaier, Title, FormContainer } from './styled';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Contaier>
      <Image source={logoImg} />

      <FormContainer>
        <Title>Entrar</Title>
      </FormContainer>
    </Contaier>
  );
};

export default SignIn;
