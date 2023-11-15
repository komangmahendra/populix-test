import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyList} from './MyList';
import {MyListDetail} from '../MyListDetail/MyListDetail';
import {SCREEN} from '../../types/screen';

const Stack = createNativeStackNavigator();

export const MyListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.LIST} component={MyList} />
      <Stack.Screen name={SCREEN.LIST_DETAIL} component={MyListDetail} />
    </Stack.Navigator>
  );
};
