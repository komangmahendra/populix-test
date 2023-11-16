import React, {ReactNode} from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

export const Placeholder = ({children}: {children: ReactNode}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, {borderColor: theme.colors.text}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 40,
  },
});
