import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LocalizationProvider } from '../contexts/LocalizationContext';
import AppNavigator from '../navigation/AppNavigator';
import { navigationRef } from '../navigation';

export default function AppRoot() {
  return (
    <LocalizationProvider>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </LocalizationProvider>
  );
}
