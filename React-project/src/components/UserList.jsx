import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>회원목록</h2>

      {users.length === 0 ? (
        <p>등록된 회원이 없습니다.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;