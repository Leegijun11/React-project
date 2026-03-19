import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return (
      <div style={{
        maxWidth: '760px', margin: '0 auto', padding: '2.5rem 1.5rem',
        fontFamily: 'sans-serif', textAlign: 'center',
      }}>
        <div style={{
          background: '#f5f3ff', borderRadius: '14px',
          border: '1.5px dashed #c7d2fe', padding: '4rem 1rem',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>📭</div>
          <h2 style={{ fontSize: '16px', color: '#6b7280', fontWeight: '500', margin: '0 0 16px' }}>
            게시글 정보가 없습니다
          </h2>
          <button
            onClick={() => navigate("/postlist")}
            style={{
              padding: '9px 20px', borderRadius: '8px', background: '#4f46e5',
              color: '#fff', fontSize: '13px', fontWeight: '600',
              border: 'none', cursor: 'pointer',
            }}
          >
            목록으로
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '760px', margin: '0 auto',
      padding: '2.5rem 1.5rem', fontFamily: 'sans-serif',
    }}>

      {/* 뒤로가기 */}
      <button
        onClick={() => navigate("/postlist")}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#6366f1', fontSize: '13px', fontWeight: '500',
          padding: '0 0 1.5rem', marginBottom: '0.5rem',
        }}
      >
        ← 목록으로
      </button>

      {/* 게시글 카드 */}
      <div style={{
        background: '#fff', border: '1.5px solid #e0e7ff',
        borderRadius: '16px', padding: '2rem',
        boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
      }}>

        {/* 제목 */}
        <div style={{ borderBottom: '1.5px solid #e0e7ff', paddingBottom: '1.2rem', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-block', background: '#ede9fe', color: '#6366f1',
            fontSize: '11px', fontWeight: '600', padding: '3px 10px',
            borderRadius: '99px', marginBottom: '10px', letterSpacing: '0.04em',
          }}>
            게시글
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', margin: 0 }}>
            {post.title}
          </h2>
        </div>

        {/* 내용 */}
        <p style={{
          fontSize: '15px', color: '#374151', lineHeight: '1.8',
          margin: '0 0 2rem', whiteSpace: 'pre-wrap', minHeight: '120px',
        }}>
          {post.content}
        </p>

        {/* 하단 버튼 */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => navigate("/postlist")}
            style={{
              padding: '9px 20px', borderRadius: '8px', background: '#4f46e5',
              color: '#fff', fontSize: '13px', fontWeight: '600',
              border: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => e.target.style.background = '#4338ca'}
            onMouseLeave={e => e.target.style.background = '#4f46e5'}
          >
            목록으로
          </button>
        </div>

      </div>
    </div>
  );
};

export default PostDetail;