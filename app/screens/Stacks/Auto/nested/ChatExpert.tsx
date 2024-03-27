import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { ChatbotAvatar } from '../../../../constants/ImagesConstants';


interface ChatSupportProps {}

const ChatSupport: React.FC<ChatSupportProps> = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '👋 Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native Bot',
          avatar: ChatbotAvatar,
        },
      },
    ]);
  }, []);

  const onSend = useCallback(async (newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    const userMessage = newMessages[0].text;

    try {
      const response = await fetch('https://backend-autoexpertease-production.up.railway.app/api/help', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botReply = data.data;

      // Add bot's reply to the chat
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: botReply,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native Bot',
              avatar: ChatbotAvatar,
            },
          },
        ])
      );
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error
    }
  }, []);

  return (
    <GiftedChat
      messagesContainerStyle={{ backgroundColor: '#fff' }}
      placeholder='Ask anything...'
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
        avatar: ChatbotAvatar,
      }}
    />
  );
};

export default ChatSupport;
