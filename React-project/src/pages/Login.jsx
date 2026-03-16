import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () =>{

    
    
    const {userInfo, setUserInfo, loginUser, setLoginUser} = useContext(UserContext)

    const [loginId,setLoginId]= useState("");
    const [loginPw,setLoginPw]= useState(0);
    const navigator = useNavigate();

    const log = () =>{
        if(userInfo.some((i)=>i.Id === loginId && i.Pw === loginPw)){
            
            setLoginUser({id:1,Id:loginId,Pw:loginPw})

            setLoginId("")
            setLoginPw(0)
            navigator("/Home")
        }
        else {
            alert("아이디 또는 비밀번호가 틀렸습니다.")
        }
    }
  
    return (
        <>

        <h2>로그인 폼</h2>
        <input type="text" placeholder='Id를 입력하세요' onChange={(e)=>setLoginId(e.target.value)} value={loginId}/>
        <input type="password" placeholder='Pw를 입력하세요'onChange={(e)=>setLoginPw(e.target.value)} value ={loginPw}/>
        <button onClick={()=>log()}>로그인</button>
        </>
    );
};

export default Login;