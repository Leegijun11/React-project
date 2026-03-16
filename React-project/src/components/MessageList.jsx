import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.length === 0 ? (
        <p>메시지가 없습니다.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg.id}>
            <p>보낸 사람: {msg.sender}</p>
            <p>내용: {msg.text}</p>
            <p>시간: {msg.createdAt}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;