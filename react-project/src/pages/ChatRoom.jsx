import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import './Messenger.css';

const ChatRoom = ({ userId, onClose }) => {
  const { loginUser } = useContext(UserContext);
  const [messages, setMessages] = useLocalStorage_list("messages", []);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: loginUser.Id,
      receiver: userId,
      text,
      createdAt: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setText("");
  };

  const displayedMessages = messages.filter(
    msg =>
      (msg.sender === loginUser.Id && msg.receiver === userId) ||
      (msg.sender === userId && msg.receiver === loginUser.Id)
  );

  return (
    <div className="messenger-overlay">
      <div className="messenger-window">
        <div className="messenger-header">
          <span>1:1 채팅 - {userId}</span>
          <button onClick={onClose}>X</button>
        </div>
        <div className="messenger-body">
          <div className="message-list">
            {displayedMessages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender === loginUser.Id ? "me" : "other"}`}>
                <b>{msg.sender}</b>: {msg.text} <i>({msg.createdAt})</i>
              </div>
            ))}
          </div>
        </div>
        <div className="messenger-input">
          <input
            type="text"
            placeholder="메시지 입력"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;