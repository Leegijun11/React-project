import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

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
      <h3>댓글 작성</h3>
      <CommentForm postId={post.id}/>
      <h3>댓글 목록</h3>
      <CommentList postId={post.id} />

      <button onClick={() => navigate("/postlist")}>
        목록으로
      </button>



    </div>
  );
};

export default PostDetail;