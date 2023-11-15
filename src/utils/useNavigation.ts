import {useNavigation as navigation, useRoute} from '@react-navigation/native';
import {SCREEN} from '../types/screen';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  [SCREEN.MOVIE_DETAIL]?: {movieId?: number; screen?: SCREEN} | undefined;
  [SCREEN.LIST_DETAIL]?: {listId?: number; screen?: SCREEN} | undefined;
  [SCREEN.HOME]?: {screen: SCREEN; params: any} | undefined;
};

export const useNavigation = () => {
  const {params} = useRoute();
  const {navigate} = navigation<StackNavigationProp<RootStackParamList>>();

  const onNavigate = (screen: SCREEN, propsParams?: any) => {
    navigate(screen as any, propsParams as any);
  };

  return {
    navigate: onNavigate,
    params: (params || {}) as any,
  };
};
