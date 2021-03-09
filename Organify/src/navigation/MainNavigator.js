import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './authentication/AuthNavigator';
import HomeTabNavigator from './home/bottomtab/HomeTabNavigator';

const Main = createStackNavigator();

export default function MainNavigator() {
  return (
    <>
      <Main.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}>
        <Main.Screen
          name="Authentication"
          component={AuthNavigator}
          options={{
            title: '',
          }}
        />
        <Main.Screen
          name="HomeTab"
          component={HomeTabNavigator}
          options={{
            title: '',
          }}
        />
      </Main.Navigator>
    </>
  );
}
