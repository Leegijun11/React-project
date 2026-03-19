// pages/Messenger.jsx
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import useAuth from './../hooks/useAuth';

const Messenger = () => {
  const { loginUser } = useAuth();
  const [users] = useLocalStorage_list("users");
  const [messages, setMessages] = useLocalStorage_list("messages");
  const [text, setText] = useState("");
  const [receiver, setReceiver] = useState("모두");
  const navigate = useNavigate();

  useEffect(()=>{
        localStorage.setItem("messages",JSON.stringify(messages))
  },[messages])


  if (!loginUser) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <p>로그인 후 이용 가능합니다.</p>
        <button onClick={() => navigate("/login")}>로그인하러 가기</button>
      </div>
    );
  }

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
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'sans-serif' }}>

      <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', marginBottom: '1.5rem' }}>
        메신저
      </h2>

      {/* 받는 사람 선택 */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1.2rem', padding: '12px 16px',
        background: '#f5f3ff', borderRadius: '10px', border: '1.5px solid #e0e7ff',
      }}>
        <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151' }}>받는 사람:</label>
        <select
          value={receiver}
          onChange={e => setReceiver(e.target.value)}
          style={{
            padding: '6px 10px', borderRadius: '6px', fontSize: '13px',
            border: '1.5px solid #c7d2fe', outline: 'none', color: '#1e1b4b',
            background: '#fff',
          }}
        >
          <option value="모두">전체</option>
          {users.filter(u => u.Id !== loginUser.Id).map(u => (
            <option key={u.Id} value={u.Id}>{u.Id}</option>
          ))}
        </select>
        <button
          onClick={() => receiver !== "모두" && navigate("/chatroom", { state: { receiver } })}
          style={{
            padding: '6px 14px', borderRadius: '6px', fontSize: '12px',
            fontWeight: '500', border: '1.5px solid #c7d2fe',
            background: '#fff', color: '#6366f1', cursor: 'pointer',
          }}
          onMouseEnter={e => e.target.style.background = '#ede9fe'}
          onMouseLeave={e => e.target.style.background = '#fff'}
        >
          1:1 채팅 열기
        </button>
      </div>

      {/* 메시지 목록 */}
      <div style={{
        border: '1.5px solid #e0e7ff', borderRadius: '12px',
        padding: '1rem', minHeight: '320px', maxHeight: '400px',
        overflowY: 'auto', background: '#fff', marginBottom: '1rem',
        display: 'flex', flexDirection: 'column', gap: '10px',
      }}>
        {displayedMessages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '13px', marginTop: '2rem' }}>
            아직 메시지가 없습니다
          </div>
        ) : (
          displayedMessages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === loginUser.Id ? 'flex-end' : 'flex-start',
              }}
            >
              <span style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '3px' }}>
                {msg.sender} {msg.receiver !== "모두" ? `→ ${msg.receiver}` : "(전체)"}
              </span>
              <div style={{
                padding: '8px 14px', borderRadius: '10px', fontSize: '14px', maxWidth: '70%',
                background: msg.sender === loginUser.Id ? '#4f46e5' : '#f3f4f6',
                color: msg.sender === loginUser.Id ? '#fff' : '#1e1b4b',
              }}>
                {msg.text}
              </div>
              <span style={{ fontSize: '10px', color: '#d1d5db', marginTop: '3px' }}>
                {msg.createdAt}
              </span>
            </div>
          ))
        )}
      </div>

      {/* 입력창 */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1, padding: '10px 14px', borderRadius: '8px',
            border: '1.5px solid #e0e7ff', fontSize: '14px',
            outline: 'none', color: '#1e1b4b',
          }}
          onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
          onBlur={e => e.target.style.border = '1.5px solid #e0e7ff'}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 20px', borderRadius: '8px', background: '#4f46e5',
            color: '#fff', fontSize: '14px', fontWeight: '600',
            border: 'none', cursor: 'pointer',
          }}
          onMouseEnter={e => e.target.style.background = '#4338ca'}
          onMouseLeave={e => e.target.style.background = '#4f46e5'}
        >
          전송
        </button>
      </div>

    </div>
  );
};

export default Messenger;