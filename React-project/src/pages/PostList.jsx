import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostList=() => {

  const [posts, setPosts]=useState([])
  const navigate =useNavigate()

  useEffect(() =>{
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || []
    setPosts(savedPosts);
  }, [])

  const deletePost = (id)=>{

    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
    localStorage.setItem("posts", JSON.stringify(updatedPosts))
  }

  const goDetail=(post)=>{
    navigate("/postdetail", { state: { post } })

  }

  const goEdit=(post)=>{
    navigate("/postform", { state: { post } })
  }



  return (
    <div>

      <h2>게시글 목록</h2>

      <button onClick={()=>navigate("/postform")}>글 작성</button>

      <ul>

        {posts.map((post) => (

          <li key={post.id}>

            <span onClick={() => goDetail(post)}>
              {post.title}
            </span>

            <button onClick={() => goEdit(post)}>수정</button>

            <button onClick={()=>deletePost(post.id)}>삭제</button>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default PostList;