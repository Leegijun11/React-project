import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#1e1b4b',
      color: '#a5b4fc',
      padding: '36px 32px 24px',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>

        {/* 상단 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#e0e7ff', marginBottom: '6px' }}>
              우리들의 커뮤니티
            </div>
            <div style={{ fontSize: '13px', lineHeight: '1.7', color: '#818cf8' }}>
              React 기반 커뮤니티 프로젝트<br />
              게시글 · 댓글 · 실시간 메신저
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6366f1', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.05em' }}>
              제작팀
            </div>
            <div style={{ fontSize: '13px', color: '#a5b4fc', lineHeight: '1.9' }}>
              이기준 · 권아림 · 김덕현 · 윤기은 · 노승태
            </div>
          </div>
        </div>

        {/* 하단 구분선 + 안내 */}
        <div style={{ borderTop: '1px solid rgba(99,102,241,0.25)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: '#6366f1' }}>
            © 2026 React Community Project
          </span>
          <span style={{ fontSize: '12px', color: '#6366f1' }}>
            학습 목적으로 제작된 서비스입니다
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;