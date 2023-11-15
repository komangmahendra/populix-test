import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IMAGE_BASE_URL} from '../constant/url';

export const Card = ({
  imageUri,
  onPress,
}: {
  imageUri: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
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
    borderRadius: 4,
    overflow: 'hidden',
  },
  imgContainer: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
