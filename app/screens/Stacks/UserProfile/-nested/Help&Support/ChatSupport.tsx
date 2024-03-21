import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage,} from 'react-native-gifted-chat';
import { AvatarSrc, ChatbotAvatar } from '../../../../../constants/ImagesConstants';
import SendBotMessage from '../../../../../api/Chat/ChatbotApi';


interface ChatSupportProps { }

const ChatSupport: React.FC<ChatSupportProps> = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
SendBotMessage("Walter")
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
        avatar:ChatbotAvatar
      }}
    />

  );
};

export default ChatSupport