import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import './Navbar.css';

const Navbar = ({ openMessenger }) => {
  const { loginUser, setLoginUser } = useContext(UserContext);
  const [time, setTime] = useState(0);
  const [logining, setLogining] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (loginUser) setLogining(true);
    else setLogining(false);
  }, [loginUser]);

  const logout = () => {
    setLoginUser(null);
    setLogining(false);
  };

  return (
    <nav className="navbar">
      {/* 왼쪽: 이용시간 */}
      <div className="navbar-left">
        <span>이용시간: {time}초</span>
      </div>

      {/* 중앙: 메뉴 */}
      <div className="navbar-center">
        <Link to="/">홈</Link>
        <Link to="/postlist">게시글</Link>
        <button onClick={openMessenger}>메신저</button>
      </div>

      {/* 오른쪽: 로그인/회원정보 */}
      <div className="navbar-right">
        {!logining && (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
        {logining && loginUser && (
          <>
            <span>{loginUser.Id}</span>
            <button onClick={logout}>로그아웃</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;