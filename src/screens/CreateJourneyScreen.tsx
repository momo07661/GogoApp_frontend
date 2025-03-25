// src/screens/CreateJourneyScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const CreateJourneyScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const handleCreateJourney = () => {
    // 呼叫 API 或 Context，建立行程
    alert(`已建立行程：${title}`);
    navigation.navigate('Journey');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>建立新行程</Text>
      <TextInput
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
        value={title}
        onChangeText={setTitle}
        placeholder="輸入行程名稱..."
      />
      <Button title="建立" onPress={handleCreateJourney} />
    </View>
  );
};

export default CreateJourneyScreen;
