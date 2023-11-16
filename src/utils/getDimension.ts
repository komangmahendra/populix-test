import {Dimensions} from 'react-native';

export const getDimension = () => {
  return {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
};
