import React from 'react';
import { useState } from 'react';

const Navbar = () => {

const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])
    return (
    <>

      <div>이용시간 : {time}초</div>

      <Link to="/home">홈</Link>
      <Link to="/postlist">게시글</Link>
      <Link to="/messenger">메신저</Link>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>

    </>
    );
};

export default Navbar;