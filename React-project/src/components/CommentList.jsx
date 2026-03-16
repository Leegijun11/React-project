import React from 'react';
import { useComments } from '../context/CommentProvider';

const CommentList = ({postId,userId}) => {    
    const { comments, deleteComent} =useComments();

    const postComments = comments.filter((c)=> c.postId === postId);

    return (
        <ul>
            {postComments.length === 0 && <p>댓글이 없습니다</p>}
            {postComments.map((c)=>(
                <li key={c.id}>{c.userId} : {c.commentText}
                <button onClick={()=>{deleteComent(c.id)}} >삭제</button>
                </li>
            ))
            }
        </ul>
    );
};

export default CommentList;