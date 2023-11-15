import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './src/screen/Home';
import {TabNav} from './src/components/TabNav';
import {ListScreen} from './src/screen/List';
import {SCREEN} from './src/types/screen';

const Tab = createBottomTabNavigator();

export default function App() {
  const myTheme = {
    colors: {
      primary: '#164863',
      background: '#fff',
      card: '#427D9D',
      text: '#9BBEC8',
      border: '#DDF2FD',
      notification: '#fff',
      danger: '#FA7070',
    },
    dark: false,
  };

  return (
    <NavigationContainer theme={myTheme}>
      <Tab.Navigator tabBar={props => <TabNav {...props} />}>
        <Tab.Screen
          name={SCREEN.MAIN_HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name={SCREEN.MAIN_LIST}
          component={ListScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'List',
            tabBarStyle: {display: 'none'},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
