import React, { useContext, useState } from 'react';
import { useComments } from '../context/CommentProvider';
import { UserContext  } from '../context/UserProvider';

const CommentForm = ({ postId }) => {
    const { loginUser }= useContext(UserContext);
    const userId = loginUser?.ld;
    const userName = loginUser?.ld;

    const [commentText,setCommentText]=useState('');
    const { addComment } = useComments();

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!commentText.trim()) return;
        addComment(postId,userName,commentText);
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