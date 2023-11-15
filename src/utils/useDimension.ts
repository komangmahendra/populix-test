import {Dimensions} from 'react-native';

export const useDimension = () => {
  return {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
};
