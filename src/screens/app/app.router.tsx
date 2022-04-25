import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '@constants/routes';
import { Template } from '@screens/template';
import { Login } from '@screens/auth/Login/Login';

const Stack = createStackNavigator();

const noHeaderScreenOptions = { headerShown: false, gestureEnabled: false };

export const AppRouter = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={noHeaderScreenOptions}
      name={ROUTES.LOGIN}
      component={Login}
    />
    <Stack.Screen
      options={noHeaderScreenOptions}
      name={ROUTES.HOME}
      component={Template}
    />
  </Stack.Navigator>
);
