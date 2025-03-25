// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import JourneyScreen from '../screens/JourneyScreen';
import CreateJourneyScreen from '../screens/CreateJourneyScreen';
import AIChatScreen from '../screens/AIChatScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journey" component={JourneyScreen} />
        <Stack.Screen name="CreateJourney" component={CreateJourneyScreen} />
        <Stack.Screen name="AIChat" component={AIChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
