import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {




  return (
    

    <UserProvider> {/* userId , userPw, comment*/}
      <BrowserRouter>
        <Routes>
          <Navbar> {/*상단 바 (홈, 메신저, 게시글, 회원가입, 로그인 탭) ,우측 상단?에 로그인 상태와 사용자 정보 */} 
          <Footer> {/*하단 바 (프로젝트 정보, 제작자 정보, 간단한 안내 문구) */}
          <Route path ='/' element={<Home/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/postlist' element={<Postlist/>}/>
          <Route path ='/postdetail' element={<Postdetail/>}/>
          <Route path ='/postform' element={<Postform/>}/>
          <Route path ='/commentlist' element={<Commentlist/>}/>
          <Route path ='/commentform' element={<Commentform/>}/>
          <Route path ='/messenger' element={<Messenger/>}/>
          <Route path ='/chatroom' element={<Chatroom/>}/>
          <Route path ='/timer' element={<Timer/>}/>
          <Route path ='/protectedroute' element={<ProtectedRoute/>}/>
          </Footer>
          </Navbar>
        </Routes>
      
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;