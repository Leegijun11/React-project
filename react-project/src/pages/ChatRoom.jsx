import React from "react";
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const ChatRoom = ({ messages, onSend }) => {
  return (
    <div>
      <h2>단체 채팅방</h2>
      <div>
        <MessageList messages={messages} />
      </div>
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatRoom;