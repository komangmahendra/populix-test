import React, {ReactNode} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

// constant
import {IMAGE_BASE_URL} from '../constant/url';

export const CardRowItem = ({
  imageUri,
  content,
  testID,
  onPress,
}: {
  imageUri: string;
  content?: ReactNode;
  testID?: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={styles.container}
      onPress={() => onPress()}>
      <Image
        style={styles.imgContainer}
        source={{
          uri: `${IMAGE_BASE_URL}/${imageUri}`,
        }}
      />
      <View style={styles.content}>{content}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  content: {
    marginLeft: 10,
    justifyContent: 'center',
    // calculate max content width =>
    // total width screen - margin left content - padding layout
    maxWidth: Dimensions.get('window').width - 50 - 10 - 10,
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 4,
    resizeMode: 'cover',
  },
});
