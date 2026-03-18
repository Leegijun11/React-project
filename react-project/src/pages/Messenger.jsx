import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";
import { useLocalStorage_list, useLocalStorage_null } from "../hooks/useLocalStorage";
import ChatRoom from "../components/ChatRoom";
import UserList from "../components/UserList";
import { UserContext } from './../context/UserProvider';

const Messenger = () => {
  const { loginUser } = useAuth();
  const [messages, setMessages] = useLocalStorage_list("messages");
  const [users] = useLocalStorage_list("users");

  if (!loginUser) {
    return <div>로그인 후 이용 가능합니다.</div>;
  }

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      roomId: "global",
      sender: loginUser.name,
      text: text,
      createdAt: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <UserList users={users} />
      <ChatRoom messages={messages} onSend={sendMessage} />
    </div>
  );
};
// 응애 
export default Messenger;