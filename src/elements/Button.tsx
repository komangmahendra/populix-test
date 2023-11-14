import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

// type ButtonType = 'primary' | 'secondary' | 'tertiary';
// type Size = 'sm' | 'lg';
type ButtonComponentProps = PressableProps & {title: string};

export const Button = ({...props}: ButtonComponentProps) => {
  return (
    <Pressable {...props} style={styles.baseButton}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default Button;
