import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    padding: 16,
  },
});
