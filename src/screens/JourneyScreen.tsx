// src/screens/JourneyScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import { useJourney, Element } from '../contexts/JourneyContext';

const JourneyScreen = () => {
  const { state, dispatch } = useJourney();

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Element>) => {
    return (
      <View
        style={[
          styles.itemContainer,
          { backgroundColor: isActive ? '#f0f0f0' : '#fff' },
        ]}
      >
        <Text onLongPress={drag}>{item.type.toUpperCase()}</Text>
        <Text>{item.content}</Text>
      </View>
    );
  };

  const handleDragEnd = ({ data }) => {
    // data 是拖曳後的新陣列，更新 state
    // 你可根據需求調整
    // e.g. dispatch 你的新 elements
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{state.title}</Text>
      <DraggableFlatList
        data={state.elements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onDragEnd={handleDragEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: 'bold', padding: 16 },
  itemContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
});

export default JourneyScreen;
