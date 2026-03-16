import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext()




const UserProvider = (props) => {

    const [userInfo,setUserInfo] = useState(()=>{
        const saved = localStorage.getItem("users")
        return saved ? JSON.parse(saved):[]
    })
    const [loginUser,setLoginUser] = useState(()=>{
        const logined = localStorage.getItem("loginUser")
        return logined ? JSON.parse(logined):null
    });

    const [comments, setComments] = useState(()=>{
        const commented = localStorage.getItem("commentText")
        return commented ? JSON.parse(commented):[]
    })

    const obj = {userInfo,setUserInfo,loginUser,setLoginUser}

    useEffect(()=>{
        localStorage.setItem("commentText",JSON.stringify(comments))
    },[comments])

    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(userInfo))
    },[userInfo])

    useEffect(()=>{
        localStorage.setItem("loginUser",JSON.stringify(loginUser))
    },[loginUser])
    return (
        <UserContext.Provider value ={obj}>
            {props.children}
        </UserContext.Provider>

    );
};

export default UserProvider;