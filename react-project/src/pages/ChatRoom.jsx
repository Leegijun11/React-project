// pages/ChatRoom.jsx
import React, { useState, useContext } from "react";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ChatRoom = () => {
  const { loginUser } = useAuth();
  const [messages, setMessages] = useLocalStorage_list("messages");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const receiver = location.state?.receiver; // Messenger에서 navigate("/chatroom", { state: { receiver } }) 로 넘긴 값

  if (!loginUser) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <p>로그인 후 이용 가능합니다.</p>
        <button onClick={() => navigate("/login")}>로그인하러 가기</button>
      </div>
    );
  }

  if (!receiver) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <p>채팅 상대가 없습니다.</p>
        <button onClick={() => navigate("/messenger")}>메신저로 돌아가기</button>
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
    msg =>
      (msg.sender === loginUser.Id && msg.receiver === receiver) ||
      (msg.sender === receiver && msg.receiver === loginUser.Id)
  );

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'sans-serif' }}>

      {/* 뒤로가기 */}
      <button
        onClick={() => navigate("/messenger")}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#6366f1', fontSize: '13px', fontWeight: '500',
          padding: '0 0 1.2rem', display: 'flex', alignItems: 'center', gap: '4px',
        }}
      >
        ← 메신저로 돌아가기
      </button>

      {/* 헤더 */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1.2rem', padding: '12px 16px',
        background: '#f5f3ff', borderRadius: '10px', border: '1.5px solid #e0e7ff',
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: '#6366f1', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '13px', fontWeight: '600', color: '#fff',
        }}>
          {receiver?.[0]?.toUpperCase()}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e1b4b' }}>{receiver}</div>
          <div style={{ fontSize: '11px', color: '#9ca3af' }}>1:1 채팅</div>
        </div>
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
                {msg.sender}
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

export default ChatRoom;