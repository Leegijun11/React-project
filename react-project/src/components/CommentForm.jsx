import React, { useContext, useState } from 'react';
import { useComments } from '../context/CommentProvider';
import { UserContext  } from '../context/UserProvider';

const CommentForm = ({ postId }) => {
    const { loginUser }= useContext(UserContext);
    const userId = loginUser?.Id;

    const [commentText,setCommentText]=useState('');
    const { addComment } = useComments();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!commentText.trim()) return;
        addComment(postId,userId,commentText);
        setCommentText('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display:'flex', gap:'8px', marginTop:'1rem' }}>
                <input
                    value={commentText}
                    onChange={(e)=>setCommentText(e.target.value)}
                    placeholder='댓글 작성'
                    style={{
                        flex:1, padding:'10px 14px', borderRadius:'8px',
                        border:'1.5px solid #e0e7ff', fontSize:'13px',
                        color:'#1e1b4b', outline:'none', fontFamily:'sans-serif',
                    }}
                    onFocus={e => e.target.style.border='1.5px solid #6366f1'}
                    onBlur={e => e.target.style.border='1.5px solid #e0e7ff'}
                />
                <button
                    type='submit'
                    style={{
                        padding:'10px 18px', borderRadius:'8px', background:'#4f46e5',
                        color:'#fff', fontSize:'13px', fontWeight:'600',
                        border:'none', cursor:'pointer',
                    }}
                    onMouseEnter={e => e.target.style.background='#4338ca'}
                    onMouseLeave={e => e.target.style.background='#4f46e5'}
                >
                    등록
                </button>
            </form>
        </div>
    );
};

export default CommentForm;