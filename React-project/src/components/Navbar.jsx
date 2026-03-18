import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
const Navbar = () => {
const {loginUser,setLoginUser} = useContext(UserContext)
const [time, setTime] = useState(0)
const [logining,setLogining] =useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(()=>{
    if(loginUser === null){ return}
    else { setLogining(true)}
  },[loginUser])

  const logout = () =>{
    setLoginUser(null)
    setLogining(false)
  }
    return (
    <>

      <div>이용시간 : {time}초</div>

      <Link to="/home">홈</Link>
      <Link to="/postlist">게시글</Link>
      <Link to="/messenger">메신저</Link>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>


      {logining && (
        <>
        회원 정보 <br/>
        ID : {loginUser.Id}
        <button onClick={()=>logout()}>로그아웃</button>
        </>
      ) }

    </>
    );
};

export default Navbar;