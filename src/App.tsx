// src/App.tsx (修改)
import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { JourneyProvider } from './contexts/JourneyContext';

const App = () => {
  return (
    <JourneyProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </JourneyProvider>
  );
};

export default App;
