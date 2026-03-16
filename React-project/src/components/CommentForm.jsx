import React, { useState } from 'react';
import { useComments } from '../context/CommentProvider';

const CommentForm = ({postId, userId}) => {

    const [commentText,setCommentText]=useState('');
    const { addComment } = useComments();

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!commentText) return;
        addComment(postId,userId,commentText);
        setCommentText('')
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={commentText} 
                onChange={(e)=>setCommentText(e.target.value)} 
                placeholder='댓글 작성'/>   
                <button type='submit'>등록</button>     
            </form>            
        </div>
    );
};

export default CommentForm;