import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostDetail = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const post=location.state?.post

  if (!post) {

    return (
      <div>
        <h2>게시글 정보가 없습니다</h2>
        <button onClick={() => navigate("/postlist")}>
          목록으로
        </button>
      </div>
    )

  }

  return (
    <div>

      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <button onClick={() => navigate("/postlist")}>
        목록으로
      </button>

    </div>
  );
};

export default PostDetail;