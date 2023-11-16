import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const HeaderWrapper = ({children, ...props}: ViewProps) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    padding: 0,
  },
});
