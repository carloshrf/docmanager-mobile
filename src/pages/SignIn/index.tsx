import React from 'react';
import { Image } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import { Contaier, Title, FormContainer } from './styled';

const SignIn: React.FC = () => {
  return (
    <Contaier>
      <Image source={logoImg} />

      <FormContainer>
        <Title>Entrar</Title>
        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />
        <Button
          onPress={() => {
            console.log('foi');
          }}
        >
          Entrar
        </Button>
      </FormContainer>
    </Contaier>
  );
};

export default SignIn;
