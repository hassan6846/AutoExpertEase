import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "react-native-gifted-chat";

interface ChatBotState {
  messages: IMessage[];
}

const initialState: ChatBotState = {
  messages: [],
};

const ChatBotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    saveMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },
    appendMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages = [action.payload, ...state.messages];
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { saveMessages, appendMessage, clearMessages } =
  ChatBotSlice.actions;
export default ChatBotSlice.reducer;
