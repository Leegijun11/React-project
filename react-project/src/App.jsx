import React, { useState } from 'react';
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
import UserProvider from './context/UserProvider';
import { CommentProvider } from './context/CommentProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [openMessenger, setOpenMessenger] = useState(false); // 모달 상태
  const [chatUser, setChatUser] = useState(null);

const closeChat = () => setChatUser(null);
const openChat = (userId) => {
    setChatUser(userId);      // ChatRoom 열기
    setOpenMessenger(false);  // Messenger 모달 닫기
  };

  return (
    <UserProvider>
      <CommentProvider>
        <BrowserRouter>
          {/* Navbar에 openMessenger 함수 전달 */}
          <Navbar openMessenger={() => setOpenMessenger(true)} />

          <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/signup' element={<Signup/>}/>
            <Route path ='/postlist' element={<PostList/>}/>
            <Route path ='/postdetail' element={<PostDetail/>}/>
            <Route path ='/postform' element={<PostForm/>}/>
            <Route path ='/commentlist' element={<CommentList/>}/>
            <Route path ='/commentform' element={<CommentForm/>}/>
            <Route path ='/chatroom' element={<ChatRoom/>}/>
            <Route path ='/protectedroute' element={<ProtectedRoute/>}/>
          </Routes>  

          <Footer />

          {/* Messenger 모달 */}
          {openMessenger && (
            <Messenger onClose={() => setOpenMessenger(false)} openChat={openChat}/>
          )}
          {chatUser && (
            <ChatRoom userId={chatUser} onClose={closeChat} />
          )}
        </BrowserRouter>
      </CommentProvider>
    </UserProvider>
  );
};

export default App;