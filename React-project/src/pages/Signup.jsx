import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../UserProvider';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const {userInfo,setUserInfo} = useContext(UserContext);

    const [signId,setSignId]= useState("");
    const [signPw,setSignPw]= useState(0);
    const navigator = useNavigate()

    const signup = () => {
        alert("회원가입에 성공했습니다!")
        setUserInfo([...userInfo,{id:userInfo.length+1,Id:signId,Pw:signPw}])
        setSignId("");
        setSignPw(0);
        navigator("/login")
    }
    return (
        <>
        <h2>회원 가입 폼</h2>
        <input type="text" placeholder='Id를 입력하세요' onChange={(e)=>setSignId(e.target.value)} value={signId}/>
        <input type="password" placeholder='Pw를 입력하세요'onChange={(e)=>setSignPw(e.target.value)} value ={signPw}/>
        <button onClick={()=>signup()}>회원 가입</button>
        </>
    );
};

export default Signup;