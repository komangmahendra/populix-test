import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {List} from './List';
import {ListDetail} from '../ListDetail/ListDetail';
import {SCREEN} from '../../types/screen';
import {ListForm} from '../ListForm/ListForm';

const Stack = createNativeStackNavigator();

export const ListScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN.LIST} component={List} />
      <Stack.Screen name={SCREEN.LIST_DETAIL} component={ListDetail} />
      <Stack.Screen name={SCREEN.LIST_FORM} component={ListForm} />
    </Stack.Navigator>
  );
};
