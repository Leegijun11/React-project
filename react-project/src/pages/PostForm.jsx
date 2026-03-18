import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editPost = location.state?.post;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (editPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editPost.id ? { ...post, title, content } : post
      );
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    } else {
      posts.push({ id: Date.now(), title, content });
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    navigate("/postlist");
  };

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
          padding: '0 0 1.5rem',
        }}
      >
        ← 목록으로
      </button>

      {/* 폼 카드 */}
      <div style={{
        background: '#fff', border: '1.5px solid #e0e7ff',
        borderRadius: '16px', padding: '2rem',
        boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
      }}>

        {/* 타이틀 */}
        <div style={{ marginBottom: '1.8rem' }}>
          <div style={{
            display: 'inline-block', background: '#ede9fe', color: '#6366f1',
            fontSize: '11px', fontWeight: '600', padding: '3px 10px',
            borderRadius: '99px', marginBottom: '10px', letterSpacing: '0.04em',
          }}>
            {editPost ? '수정' : '새 글'}
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', margin: 0 }}>
            {editPost ? '게시글 수정' : '게시글 작성'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* 제목 */}
          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
              제목
            </label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: '1.5px solid #e0e7ff', fontSize: '14px',
                outline: 'none', color: '#1e1b4b', boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e7ff'}
            />
          </div>

          {/* 내용 */}
          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>
              내용
            </label>
            <textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: '1.5px solid #e0e7ff', fontSize: '14px',
                outline: 'none', color: '#1e1b4b', boxSizing: 'border-box',
                resize: 'vertical', lineHeight: '1.7', fontFamily: 'sans-serif',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e7ff'}
            />
          </div>

          {/* 버튼 */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={() => navigate("/postlist")}
              style={{
                padding: '10px 22px', borderRadius: '8px', fontSize: '13px',
                fontWeight: '600', border: '1.5px solid #e0e7ff',
                background: '#fff', color: '#6b7280', cursor: 'pointer',
              }}
              onMouseEnter={e => e.target.style.background = '#f5f3ff'}
              onMouseLeave={e => e.target.style.background = '#fff'}
            >
              취소
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 22px', borderRadius: '8px', background: '#4f46e5',
                color: '#fff', fontSize: '13px', fontWeight: '600',
                border: 'none', cursor: 'pointer',
              }}
              onMouseEnter={e => e.target.style.background = '#4338ca'}
              onMouseLeave={e => e.target.style.background = '#4f46e5'}
            >
              {editPost ? '수정 완료' : '저장'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PostForm;