import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useLocalStorage_list } from '../hooks/useLocalStorage';

const Home = () => {
  const { loginUser } = useContext(UserContext);
  const [userInfo] = useLocalStorage_list("users");
  const isAdmin = loginUser?.Id === "admin" && loginUser?.Pw === "admin";

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'sans-serif' }}>

      {/* 히어로 섹션 */}
      <div style={{ textAlign: 'center', padding: '3rem 1rem 3.5rem', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: '#ede9fe', borderRadius: '99px', padding: '4px 14px',
          fontSize: '12px', color: '#6366f1', fontWeight: '500', marginBottom: '1.2rem'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          서비스 운영중
        </div>
        <h1 style={{ fontSize: '38px', fontWeight: '700', color: '#1e1b4b', margin: '0 0 1rem', lineHeight: '1.3' }}>
          우리들의 커뮤니티
        </h1>
        <p style={{ fontSize: '15px', color: '#6b7280', margin: '0 auto 2rem', maxWidth: '460px', lineHeight: '1.8' }}>
          게시글 작성, 댓글, 실시간 메신저 기능을 사용할 수 있는<br />
          React 기반 커뮤니티 서비스입니다.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/postlist" style={{
            padding: '11px 28px', borderRadius: '8px', background: '#4f46e5',
            color: '#fff', fontSize: '14px', fontWeight: '600', textDecoration: 'none',
          }}>
            게시글 보러가기
          </Link>
          <Link to="/messenger" style={{
            padding: '11px 28px', borderRadius: '8px', border: '1.5px solid #c7d2fe',
            color: '#4f46e5', fontSize: '14px', fontWeight: '600', textDecoration: 'none',
            background: '#fff',
          }}>
            메신저 열기
          </Link>
        </div>
      </div>

      {/* 기능 카드 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '2.5rem' }}>
        {[
          { emoji: '📝', title: '게시글', desc: '자유롭게 글을 작성하고 다른 사람들과 이야기를 나눠보세요.', accent: '#ede9fe', iconBg: '#6366f1' },
          { emoji: '💬', title: '댓글', desc: '게시글에 댓글을 달고 활발한 토론을 즐겨보세요.', accent: '#ede9fe', iconBg: '#818cf8' },
          { emoji: '📨', title: '메신저', desc: '실시간으로 다른 회원들과 채팅할 수 있어요.', accent: '#ede9fe', iconBg: '#a5b4fc' },
        ].map(({ emoji, title, desc, accent, iconBg }) => (
          <div key={title} style={{
            background: '#fff', border: '1.5px solid #e0e7ff',
            borderRadius: '14px', padding: '1.4rem',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px', background: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', marginBottom: '14px'
            }}>
              {emoji}
            </div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#1e1b4b', marginBottom: '6px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.7' }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* 비로그인 안내 */}
      {!loginUser && (
        <div style={{
          background: '#f5f3ff', border: '1.5px solid #c7d2fe', borderRadius: '14px',
          padding: '1.8rem', textAlign: 'center', marginBottom: '2rem'
        }}>
          <p style={{ margin: '0 0 14px', color: '#4338ca', fontSize: '15px', fontWeight: '500' }}>
            로그인하고 모든 기능을 이용해보세요!
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to="/login" style={{
              padding: '9px 24px', borderRadius: '8px', background: '#4f46e5',
              color: '#fff', fontSize: '13px', fontWeight: '600', textDecoration: 'none'
            }}>로그인</Link>
            <Link to="/signup" style={{
              padding: '9px 24px', borderRadius: '8px', border: '1.5px solid #c7d2fe',
              color: '#4f46e5', fontSize: '13px', fontWeight: '600', textDecoration: 'none', background: '#fff'
            }}>회원가입</Link>
          </div>
        </div>
      )}

      {/* 관리자 패널 */}
      {isAdmin && (
        <div style={{
          background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '14px', padding: '1.5rem'
        }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#9a3412', margin: '0 0 1rem' }}>
            관리자 패널 — 전체 회원 목록
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {userInfo.map((user) => (
              <li key={user.id} style={{
                background: '#fff', border: '1px solid #fed7aa', borderRadius: '8px',
                padding: '9px 14px', fontSize: '13px', color: '#374151',
                display: 'flex', gap: '16px'
              }}>
                <span>ID: <strong>{user.Id}</strong></span>
                <span>PW: {user.Pw}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Home;