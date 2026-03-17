import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage_list } from './hooks/useLocalStorage';

export const UserContext = createContext()


const UserProvider = (props) => {

    const [userInfo,setUserInfo] = useLocalStorage_list("users")

    const [loginUser,setLoginUser] = useLocalStorage_list("loginUser")
    
    const obj = {userInfo,setUserInfo,loginUser,setLoginUser}


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