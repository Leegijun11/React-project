import React from 'react';
import { useComments } from '../context/CommentProvider';
import useAuth from './../hooks/useAuth';

const CommentList = ({postId}) => {    
    const { comments, deleteComment} =useComments();
    const { loginUser }=useAuth();

    const postComments = comments.filter((c)=> c.postId === postId);

    return (
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'8px' }}>
            {postComments.length === 0 ? (
                <li style={{
                    textAlign:'center', padding:'2rem',
                    background:'#f5f3ff', borderRadius:'10px',
                    border:'1.5px dashed #c7d2fe',
                    fontSize:'13px', color:'#9ca3af',
                }}>
                    댓글이 없습니다
                </li>
            ) :
            (postComments.map((c)=>(
                <li key={c.id} style={{
                    background:'#fff', border:'1.5px solid #e0e7ff',
                    borderRadius:'10px', padding:'10px 14px',
                    display:'flex', justifyContent:'space-between',
                    alignItems:'center', fontSize:'13px', color:'#1e1b4b',
                }}>
                    <span>
                        {c.userId === loginUser? loginUser.Id : "" }
                        {c.userName || c.userId} : {c.commentText}
                    </span>
                
                    {c.userId === loginUser?.Id && (
                        <button
                            onClick={()=>{deleteComment(c.id)}}
                            style={{
                                padding:'4px 10px', borderRadius:'6px', fontSize:'11px',
                                fontWeight:'500', border:'1.5px solid #fecaca',
                                background:'#fff', color:'#ef4444', cursor:'pointer',
                            }}
                            onMouseEnter={e => e.target.style.background='#fef2f2'}
                            onMouseLeave={e => e.target.style.background='#fff'}
                        >
                            삭제
                        </button>
                    )}
                </li>
            )))
            }
        </ul>
    );
};

export default CommentList;
