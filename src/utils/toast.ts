import Toast, {ToastType} from 'react-native-toast-message';

export const toast = (type: ToastType, text1: string, text2?: string) => {
  Toast.show({type, text1, text2});
};
