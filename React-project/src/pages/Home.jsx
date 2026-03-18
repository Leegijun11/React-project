import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useLocalStorage_list } from '../hooks/useLocalStorage';
const Home = () => {

    const {loginUser} = useContext(UserContext)
    const [userInfo,setUserInfo] = useLocalStorage_list("users")
    return (
    <div>

      <h1>Home</h1>

      {(loginUser && loginUser.Id === "admin" && loginUser.Pw === "admin") ? (
        <>
        <h2>관리자 계정에 로그인하였습니다</h2>
        <ul>
        {userInfo.map((i=><li key={i.id}>
          회원ID : {i.Id} 회원PW : {i.Pw}
        </li>))}
        </ul>
        </>
      ) : (
        <>
        </>
      )}


      <p>
        게시글 작성, 댓글, 메신저 기능을 사용할 수 있는
        React 기반 커뮤니티 서비스입니다.
      </p>

    </div>
    );
};

export default Home;