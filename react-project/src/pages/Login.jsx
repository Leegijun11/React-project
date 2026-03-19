// pages/Login.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { userInfo, loginUser, setLoginUser } = useAuth();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    if (loginUser !== null) {
      alert("로그인되어있습니다. 메인화면에서 로그아웃 후 로그인 해주세요.");
      navigator('/');
    }
  }, []);

  const log = () => {
    if (userInfo.some((i) => i.Id === loginId && i.Pw === loginPw)) {
      setLoginUser({ id: 1, Id: loginId, Pw: loginPw });
      setLoginId("");
      setLoginPw("");
      navigator("/");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") log();
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f3ff',
      padding: '2rem',
    }}>
      <div style={{
        background: '#fff',
        border: '1.5px solid #e0e7ff',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
      }}>

        {/* 상단 타이틀 */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: '#4f46e5', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '22px', margin: '0 auto 12px',
          }}>
            🔐
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', margin: '0 0 6px' }}>
            로그인
          </h2>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0 }}>
            커뮤니티를 이용하려면 로그인이 필요합니다
          </p>
        </div>

        {/* 입력 필드 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
              아이디
            </label>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: '1.5px solid #e0e7ff', fontSize: '14px', outline: 'none',
                color: '#1e1b4b', boxSizing: 'border-box',
                transition: 'border 0.15s',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e7ff'}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={loginPw}
              onChange={(e) => setLoginPw(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: '1.5px solid #e0e7ff', fontSize: '14px', outline: 'none',
                color: '#1e1b4b', boxSizing: 'border-box',
                transition: 'border 0.15s',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e7ff'}
            />
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          onClick={log}
          style={{
            width: '100%', padding: '11px', borderRadius: '8px',
            background: '#4f46e5', color: '#fff', fontSize: '14px',
            fontWeight: '600', border: 'none', cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.target.style.background = '#4338ca'}
          onMouseLeave={e => e.target.style.background = '#4f46e5'}
        >
          로그인
        </button>

        {/* 회원가입 링크 */}
        <p style={{ textAlign: 'center', marginTop: '1.2rem', fontSize: '13px', color: '#9ca3af' }}>
          계정이 없으신가요?{' '}
          <Link to="/signup" style={{ color: '#6366f1', fontWeight: '600', textDecoration: 'none' }}>
            회원가입
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;