import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatRoom = ({ messages, onSend }) => {
  return (
    <div>
      <h2>단체 채팅방</h2>
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatRoom;