import React from 'react';
import { useComments } from '../context/CommentProvider';

const CommentList = ({postId}) => {    
    const { comments, deleteComment} =useComments();

    const postComments = comments.filter((c)=> c.postId === postId);

    return (
        <ul>
            {postComments.length === 0 ? (<li>댓글이 없습니다</li>) :
            (postComments.map((c)=>(
                <li key={c.id}>{c.userId} : {c.commentText}
                <button onClick={()=>{deleteComment(c.id)}} >삭제</button>
                </li>
            )))
            
            }
        </ul>
    );
};

export default CommentList;