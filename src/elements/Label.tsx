import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export type TitleProps = TextProps & {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'header';
};

export const Label = ({children, size, style, ...props}: TitleProps) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 10;
      case 'md':
        return 14;
      case 'lg':
        return 18;
      case 'xl':
        return 32;
      case 'header':
        return 40;
      default:
        return 14;
    }
  };

  const getFontWeight = () => {
    switch (size) {
      case 'sm':
      case 'md':
      case 'lg':
        return '600';
      case 'xl':
        return '800';
      case 'header':
        return '800';
      default:
        return '500';
    }
  };

  return (
    <Text
      {...props}
      style={[
        style,
        {
          ...styles.container,
          fontSize: getSize(),
          fontWeight: getFontWeight(),
        },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },
});
