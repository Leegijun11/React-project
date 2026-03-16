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
const App = () => {




  return (
    

    <UserProvider> {/* userId , userPw, comment*/}
      <BrowserRouter>
        <Routes>
          <Navbar> {/*상단 바 (홈, 메신저, 게시글, 회원가입, 로그인 탭) ,우측 상단?에 로그인 상태와 사용자 정보 */} 
          <Footer> {/*하단 바 (프로젝트 정보, 제작자 정보, 간단한 안내 문구) */}
          <Route path ='/home' element={<Home/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/postlist' element={<PostList/>}/>
          <Route path ='/postdetail' element={<PostDetail/>}/>
          <Route path ='/postform' element={<PostForm/>}/>
          <CommentProvider>
            <Route path ='/commentlist' element={<CommentList/>}/>
            <Route path ='/commentform' element={<CommentForm/>}/>
          </CommentProvider>
          <Route path ='/messenger' element={<Messenger/>}/>
          <Route path ='/chatroom' element={<Chatroom/>}/>
          <Route path ='/protectedroute' element={<ProtectedRoute/>}/>
          </Footer>
          </Navbar>
        </Routes>
      
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
