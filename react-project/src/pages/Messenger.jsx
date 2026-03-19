import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import './Messenger.css';

const Messenger = ({ onClose, openChat }) => {
  const { loginUser } = useContext(UserContext);
  const [users] = useLocalStorage_list("users", []);
  const [messages, setMessages] = useLocalStorage_list("messages", []);
  const [text, setText] = useState("");
  const [receiver, setReceiver] = useState("모두");

  if (!loginUser) return (
    <div className="messenger-overlay">
      <div className="messenger-window">
        <div className="messenger-body">로그인 후 이용 가능합니다.</div>
        <div className="messenger-input">
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );

  const sendMessage = () => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: loginUser.Id,
      receiver,
      text,
      createdAt: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setText("");
  };

  const displayedMessages = messages.filter(
    msg => msg.receiver === "모두" || msg.receiver === loginUser.Id || msg.sender === loginUser.Id
  );

  return (
    <div className="messenger-overlay">
      <div className="messenger-window">
        <div className="messenger-header">
          <span>Messenger</span>
          <button onClick={onClose}>X</button>
        </div>

        <div className="messenger-body">
          <div className="receiver-select">
            <label>받는 사람: </label>
            <select value={receiver} onChange={e => setReceiver(e.target.value)}>
              <option value="모두">전체</option>
              {users.filter(u => u.Id !== loginUser.Id).map(u => (
                <option key={u.Id} value={u.Id}>{u.Id}</option>
              ))}
            </select>
            <button onClick={() => receiver !== "모두" && openChat(receiver)}>
              1:1 채팅 열기
            </button>
          </div>

          <div className="message-list">
            {displayedMessages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender === loginUser.Id ? "me" : "other"}`}>
                <b>{msg.sender}</b> {msg.receiver !== "모두" ? `→ ${msg.receiver}` : "(전체)"}: {msg.text} 
                <i>({msg.createdAt})</i>
              </div>
            ))}
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
    </div>
  );
};

export default Messenger;