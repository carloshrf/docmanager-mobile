import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${props =>
    !!props.isFocused &&
    css`
      border: 2px solid #1167b1;
    `}

  ${props =>
    !!props.isErrored &&
    css`
      border: 2px solid #c53030;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
