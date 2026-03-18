import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import Messenger from './pages/Messenger';
import ProtectedRoute from './router/ProtectedRoute';
import ChatRoom from './pages/ChatRoom';
import UserProvider from './UserProvider';
import { CommentProvider } from './context/CommentProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {




  return (
    

    <UserProvider> {/* userId , userPw, comment*/}
      <CommentProvider>
      <BrowserRouter>
        <Navbar /> {/*상단 바 (홈, 메신저, 게시글, 회원가입, 로그인 탭) ,우측 상단?에 로그인 상태와 사용자 정보 */} 
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/postlist' element={<PostList/>}/>
          <Route path ='/postdetail' element={<PostDetail/>}/>
          <Route path ='/postform' element={<PostForm/>}/>
            <Route path ='/commentlist' element={<CommentList/>}/>
            <Route path ='/commentform' element={<CommentForm/>}/>
          <Route path ='/messenger' element={<Messenger/>}/>
          <Route path ='/chatroom' element={<ChatRoom/>}/>
          <Route path ='/protectedroute' element={<ProtectedRoute/>}/>
        </Routes>  
        <Footer /> {/*하단 바 (프로젝트 정보, 제작자 정보, 간단한 안내 문구) */} 
      </BrowserRouter>
      </CommentProvider>
    </UserProvider>
  );
};

export default App;
