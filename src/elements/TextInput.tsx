import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps;

export const Input = ({style, ...props}: InputProps) => {
  const theme = useTheme();
  return (
    <TextInput
      {...props}
      style={[styles.container, style, {borderColor: theme.colors.text}]}
    />
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 32,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
});
