import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatRoom = ({ messages, onSend }) => {
  return (
    <div className="w-3/4 border rounded p-3 flex flex-col h-[500px]">
      <h2 className="font-bold mb-3">단체 채팅방</h2>
      <div className="flex-1 overflow-y-auto border rounded p-2 mb-3">
        <MessageList messages={messages} />
      </div>
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatRoom;