import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './src/screen/Home';
import {MyList} from './src/screen/MyList/MyList';
import {TabNav} from './src/components/TabNav';
import {MyListScreen} from './src/screen/MyList';
import {SCREEN} from './src/types/screen';

const Tab = createBottomTabNavigator();

export default function App() {
  // const myTheme = {
  //   colors: {
  //     primary: '#000',
  //     background: '#000',
  //     card: '#000',
  //     text: '#000',
  //     border: '#000',
  //     notification: '#000',
  //   },
  //   dark: false,
  //   dimension: {
  //     width: Dimensions.get('window').width,
  //     height: Dimensions.get('window').height,
  //   },
  // };

  // const getTabBarVisibility = route => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   const hideOnScreens = [SCREENS.REVIEW_ORDER, SCREENS.ORDER_PAYMENT]; // put here name of screen where you want to hide tabBar
  //   return hideOnScreens.indexOf(routeName) <= -1;
  // };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabNav {...props} />}>
        <Tab.Screen
          name={SCREEN.MAIN_HOME}
          component={HomeScreen}
          options={route => ({headerShown: false, tabBarLabel: 'Home'})}
        />
        <Tab.Screen
          name={SCREEN.MAIN_LIST}
          component={MyListScreen}
          options={{headerShown: false, tabBarLabel: 'My List'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
