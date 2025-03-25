// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to GOGO App</Text>
      <Button
        title="建立行程"
        onPress={() => navigation.navigate('CreateJourney')}
      />
      <Button
        title="檢視行程"
        onPress={() => navigation.navigate('Journey')}
      />
      <Button
        title="AI 對話"
        onPress={() => navigation.navigate('AIChat')}
      />
    </View>
  );
};

export default HomeScreen;
