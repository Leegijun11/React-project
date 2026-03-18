import React from "react";
import { useAuth } from "../context/AuthContext";
import { useLocalStorage_list } from "../hooks/useLocalStorage";
import ChatRoom from "../components/ChatRoom";
import UserList from "../components/UserList";

const Messenger = () => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useLocalStorage_list("messages");
  const [users] = useLocalStorage("users", []);

  if (!currentUser) {
    return <div>로그인 후 이용 가능합니다.</div>;
  }

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      roomId: "global",
      sender: currentUser.name,
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

export default Messenger;