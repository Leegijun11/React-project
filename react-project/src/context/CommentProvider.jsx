import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { useLocalStorage_list } from './../hooks/useLocalStorage';
export const CommentContext = createContext('')


export const CommentProvider = ({children}) => {
    const [comments,setComments] = useLocalStorage_list("comments");


    useEffect(()=>{
        localStorage.setItem("commentText",JSON.stringify(comments))
    },[comments])    



    const addComment = (postId,userId,commentText)=>{
        const now = new Date();
        const month = (now.getMonth()+1.).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const newComment = {
            id : Date.now(),
            postId,
            userId,
            commentText,
            CreateWhen: `${month}월 ${day}일 ${hours}:${minutes}:${seconds}`
        }
        setComments([...comments, newComment])
    }
    
    const deleteComment = (commentId) =>{
        setComments(comments.filter((c)=> c.id !== commentId))
    }
    

    return (
        <CommentContext.Provider value={{comments,addComment,deleteComment}}>
            {children}
        </CommentContext.Provider>
    );
};



export const useComments = () => useContext(CommentContext);

export default CommentContext;
