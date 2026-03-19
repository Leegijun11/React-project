// pages/Messages.jsx
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage_list } from '../hooks/useLocalStorage';

const Messages = () => {
  const [temp_messages] = useLocalStorage_list("messages");
  const { loginUser } = useAuth();
  const navigator = useNavigate();

  const messages = temp_messages.filter((i)=>i.sender !== loginUser?.Id)
  useEffect(() => {
    if (loginUser === null) {
      alert("로그인 후 메시지함 열람이 가능합니다");
      navigator('/');
    }
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem 1.5rem', fontFamily: 'sans-serif' }}>

      {/* 헤더 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', margin: '0 0 4px' }}>
          메시지함
        </h2>
        <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0 }}>
          전체 메시지 {messages.length}개
        </p>
      </div>

      {/* 메시지 없을 때 */}
      {messages.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '4rem 1rem',
          background: '#f5f3ff', borderRadius: '14px',
          border: '1.5px dashed #c7d2fe',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>📭</div>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            메시지가 없습니다
          </p>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {messages.map((i) => (
            <li
              key={i.id}
              style={{
                background: '#fff', border: '1.5px solid #e0e7ff',
                borderRadius: '12px', padding: '1rem 1.25rem',
                transition: 'box-shadow 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* 보낸 사람 + 시간 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: '#ede9fe', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#6366f1',
                  }}>
                    {i.sender?.[0]?.toUpperCase()}
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e1b4b' }}>
                    {i.sender}
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                  {i.createdAt}
                </span>
              </div>

              {/* 수신자 */}
              <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>
                받는 사람: <span style={{ color: '#6366f1', fontWeight: '500' }}>{i.receiver}</span>
              </div>

              {/* 메시지 내용 */}
              <div style={{
                fontSize: '14px', color: '#374151', lineHeight: '1.6',
                background: '#f5f3ff', borderRadius: '8px', padding: '10px 14px',
              }}>
                {i.text}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;