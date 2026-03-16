import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostForm from "./pages/PostForm";
import Messenger from "./pages/Messenger";
import ChatRoom from "./pages/ChatRoom";

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./router/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/postlist" element={<PostList />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/commentlist" element={<CommentList />} />
          <Route path="/commentform" element={<CommentForm />} />

          <Route
            path="/messenger"
            element={
              <ProtectedRoute>
                <Messenger />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chatroom"
            element={
              <ProtectedRoute>
                <ChatRoom />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;