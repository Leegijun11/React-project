import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={handleSend}>전송</button>
    </div>
  );
};

export default MessageInput;