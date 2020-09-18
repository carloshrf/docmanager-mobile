import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import {
  Contaier,
  Title,
  FormContainer,
  ForgotPassword,
  ForgotPasswordText,
} from './styled';

const SignIn: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Contaier>
          <Image source={logoImg} />

          <FormContainer>
            <View>
              <Title>Entrar</Title>
            </View>
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
          <ForgotPassword
            onPress={() => {
              console.log('foi');
            }}
          >
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Contaier>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
