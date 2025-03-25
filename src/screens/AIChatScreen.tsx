// src/screens/AIChatScreen.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const AIChatScreen = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    // 初始化訊息
    setMessages([
      {
        _id: 1,
        text: 'Hi！我是你的旅程 AI 助手，有什麼需要幫忙的嗎？',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    // 在這裡呼叫你的後端 AI API，回傳後 append 到 messages
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default AIChatScreen;
