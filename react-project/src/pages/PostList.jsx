import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import { UserContext } from "../context/UserProvider";

const PostList = () => {
  const [posts, setPosts] = useLocalStorage_list("posts");
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  useEffect(() => {
    if (loginUser === null) {
      alert("로그인 후 게시글 등록이 가능합니다!");
      navigate("/");
    }
  }, []);

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div style={{
      maxWidth: '760px', margin: '0 auto',
      padding: '2.5rem 1.5rem', fontFamily: 'sans-serif',
    }}>

      {/* 헤더 */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '1.5rem',
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e1b4b', margin: '0 0 4px' }}>
            게시글 목록
          </h2>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0 }}>
            총 {posts.length}개의 게시글
          </p>
        </div>
        <button
          onClick={() => navigate("/postform")}
          style={{
            padding: '9px 20px', borderRadius: '8px', background: '#4f46e5',
            color: '#fff', fontSize: '13px', fontWeight: '600',
            border: 'none', cursor: 'pointer',
          }}
          onMouseEnter={e => e.target.style.background = '#4338ca'}
          onMouseLeave={e => e.target.style.background = '#4f46e5'}
        >
          + 글 작성
        </button>
      </div>

      {/* 게시글 없을 때 */}
      {posts.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '4rem 1rem',
          background: '#f5f3ff', borderRadius: '14px',
          border: '1.5px dashed #c7d2fe',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>📭</div>
          <p style={{ fontSize: '15px', color: '#6b7280', margin: '0 0 16px' }}>
            아직 작성된 게시글이 없습니다
          </p>
          <button
            onClick={() => navigate("/postform")}
            style={{
              padding: '9px 20px', borderRadius: '8px', background: '#4f46e5',
              color: '#fff', fontSize: '13px', fontWeight: '600',
              border: 'none', cursor: 'pointer',
            }}
          >
            첫 글 작성하기
          </button>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {posts.map((post, index) => (
            <li
              key={post.id}
              style={{
                background: '#fff', border: '1.5px solid #e0e7ff',
                borderRadius: '12px', padding: '1rem 1.25rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '12px', transition: 'box-shadow 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* 번호 + 제목 */}
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, cursor: 'pointer', minWidth: 0 }}
                onClick={() => navigate("/postdetail", { state: { post } })}
              >
                <span style={{
                  minWidth: '28px', height: '28px', borderRadius: '8px',
                  background: '#ede9fe', color: '#6366f1', fontSize: '12px',
                  fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {index + 1}
                </span>
                <span style={{
                  fontSize: '15px', fontWeight: '500', color: '#1e1b4b',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {post.title}
                </span>
              </div>

              {/* 버튼 */}
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <button
                  onClick={() => navigate("/postform", { state: { post } })}
                  style={{
                    padding: '6px 14px', borderRadius: '6px', fontSize: '12px',
                    fontWeight: '500', border: '1.5px solid #c7d2fe',
                    background: '#fff', color: '#6366f1', cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.target.style.background = '#ede9fe'}
                  onMouseLeave={e => e.target.style.background = '#fff'}
                >
                  수정
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  style={{
                    padding: '6px 14px', borderRadius: '6px', fontSize: '12px',
                    fontWeight: '500', border: '1.5px solid #fecaca',
                    background: '#fff', color: '#ef4444', cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.target.style.background = '#fef2f2'}
                  onMouseLeave={e => e.target.style.background = '#fff'}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;