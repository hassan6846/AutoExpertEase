import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage,} from 'react-native-gifted-chat';
import { ChatbotAvatar } from '../../../../../constants/ImagesConstants';


interface ChatSupportProps { }

const ChatSupport: React.FC<ChatSupportProps> = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: ' 👋 Hello How Can I help You',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: ChatbotAvatar,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  return (

    <GiftedChat
      messagesContainerStyle={{ backgroundColor: "#fff" }}
    
      placeholder='Ask Any thing'
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />

  );
};

export default ChatSupport