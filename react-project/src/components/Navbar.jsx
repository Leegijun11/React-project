import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { loginUser, setLoginUser } = useAuth();
  const [time, setTime] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const logout = () => {
    setLoginUser(null);
    setShowDropdown(false);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const navLinks = [
    { to: '/', label: '홈' },
    { to: '/postlist', label: '게시글' },
    { to: '/messenger', label: '메신저' },
    { to: '/login', label: '로그인' },
    { to: '/signup', label: '회원가입' },
    { to: '/messages', label : "메신저함"}
  ];

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      height: '60px',
      background: '#1e1b4b',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>

      {/* 좌측 - 타이머 */}
      <div style={{
        fontSize: '13px',
        color: '#a5b4fc',
        minWidth: '80px',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '0.05em',
      }}>
        ⏱ {formatTime(time)}
      </div>

      {/* 중앙 - 링크 */}
      <div style={{ display: 'flex', gap: '2px' }}>
        {navLinks.map(({ to, label }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: active ? '600' : '400',
                color: active ? '#fff' : '#a5b4fc',
                background: active ? 'rgba(255,255,255,0.12)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (!active) e.target.style.color = '#fff'; }}
              onMouseLeave={e => { if (!active) e.target.style.color = '#a5b4fc'; }}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* 우측 - 회원 정보 */}
      <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'flex-end' }}>
        {loginUser ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(prev => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px 5px 6px',
                border: '1px solid rgba(165,180,252,0.3)',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.08)',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#e0e7ff',
              }}
            >
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#6366f1', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#fff'
              }}>
                {loginUser.Id?.[0]?.toUpperCase() ?? 'U'}
              </div>
              {loginUser.Id}
              <span style={{ fontSize: '10px', color: '#a5b4fc' }}>▼</span>
            </button>

            {showDropdown && (
              <div style={{
                position: 'absolute', top: '48px', right: 0,
                background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                minWidth: '180px', zIndex: 200, padding: '8px 0',
              }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f3f4f6' }}>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>로그인 계정</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e1b4b', marginTop: '2px' }}>
                    {loginUser.Id}
                  </div>
                </div>
                <button
                  onClick={logout}
                  style={{
                    width: '100%', padding: '10px 16px', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '14px', color: '#ef4444',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

export default Navbar;