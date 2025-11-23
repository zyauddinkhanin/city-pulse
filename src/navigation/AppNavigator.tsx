import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import screens from '../utils/screens';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screens.Splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screens.Splash} component={SplashScreen} />
      <Stack.Screen name={screens.Home} component={HomeScreen} />
      <Stack.Screen name={screens.Details} component={EventDetailsScreen} />
      <Stack.Screen name={screens.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
