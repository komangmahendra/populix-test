import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IMAGE_BASE_URL} from '../constant/url';

export const Card = ({imageUri}: {imageUri: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.imgContainer}
        source={{
          uri: `${IMAGE_BASE_URL}/${imageUri}`,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
