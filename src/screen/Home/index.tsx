import React from 'react';
import {Home} from './Home';
import {MovieDetail} from '../MovieDetail/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '../../types/screen';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.HOME} component={Home} />
      <Stack.Screen name={SCREEN.MOVIE_DETAIL} component={MovieDetail} />
    </Stack.Navigator>
  );
};
