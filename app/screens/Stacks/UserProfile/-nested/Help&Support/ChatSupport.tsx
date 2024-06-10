import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { GiftedChat, IMessage, Send } from 'react-native-gifted-chat';
import { Icon } from "@rneui/themed";
import { ChatbotAvatar } from '../../../../../constants/ImagesConstants';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessages, appendMessage } from '../../../../../slices/ChatBotSlice';

const ChatSupport: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.chatbot.messages);

  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage: IMessage = {
        _id: 1,
        text: '👋 Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native Bot',
          avatar: ChatbotAvatar,
        },
      };
      dispatch(saveMessages([initialMessage]));
    }
  }, [dispatch, messages.length]);

  const onSend = useCallback(async (newMessages: IMessage[] = []) => {
    const userMessage = newMessages[0].text;

    // Append user message to the chat
    dispatch(appendMessage(newMessages[0]));

    try {
      const response = await fetch('http://10.0.2.2:4001/api/help', {
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

      const botMessage: IMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: botReply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native Bot',
          avatar: ChatbotAvatar,
        },
      };

      // Append bot's reply to the chat
      dispatch(appendMessage(botMessage));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }, [dispatch]);

  // Custom send button component
  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 8}}>
          <Icon
            name="send"
            type="material"
            size={24}
            color="#007AFF"
          />
        </View>
      </Send>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messagesContainerStyle={{ backgroundColor: '#fff' }}
        placeholder='Ask anything...'
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
          avatar: ChatbotAvatar,
        }}
        renderSend={renderSend}
      />
    </View>
  );
};

export default ChatSupport;
