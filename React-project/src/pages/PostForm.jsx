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

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (editPost) {

      const updatedPosts = posts.map((post) =>
        post.id === editPost.id
          ? { ...post, title, content }
          : post
      );

      localStorage.setItem("posts", JSON.stringify(updatedPosts))

    } else {

      const newPost = {

        id: Date.now(),
        title,
        content

      };

      posts.push(newPost);

      localStorage.setItem("posts", JSON.stringify(posts))

    }

    navigate("/postlist");

  };

  return (
    <div>

      <h2>{editPost ? "게시글 수정" : "게시글 작성"}</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />

        <button type="submit">저장</button>
          
      </form>

    </div>
  );
};

export default PostForm;