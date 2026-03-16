# Messenger Feature Branch

## 브랜치 소개
이 브랜치는 **노승태**의 담당 기능인 **메신저 페이지 구현**을 위한 작업 브랜치입니다.  

프로젝트 내에서 로그인한 사용자가 메신저 기능을 사용할 수 있도록  
채팅방 화면 구성, 메시지 전송, 단체 메시지 기능, 전송 시간 표시 기능을 구현하는 것을 목표로 합니다.

---

## 담당 역할
- 메신저 페이지 구현
- 채팅방 UI 구성
- 메시지 전송 기능 구현
- 회원목록 기반 단체 메시지 기능 구현
- 메시지 전송 시간 표시
- 로그인 사용자 기준 메시지 작성자 구분

---

## 구현 목표
1. **로그인한 사용자만 메신저 페이지 접근 가능**
2. **회원목록을 불러와 사용자 확인 가능**
3. **메시지 입력 후 전송 가능**
4. **단체 채팅(전체 채팅방) 기능 구현**
5. **전송된 메시지에 작성자와 시간 표시**
6. **localStorage를 활용한 메시지 데이터 저장**
7. **글로벌 상태 또는 인증 정보와 연동하여 현재 사용자 정보 반영**

---

## 주요 기능
### 1. 메신저 페이지
- 로그인한 사용자만 접근 가능
- 비로그인 사용자는 접근 제한
- 전체 채팅방 형식으로 메시지 확인 가능

### 2. 채팅방 UI
- 메시지 목록 출력
- 작성자 이름 표시
- 메시지 내용 표시
- 전송 시간 표시

### 3. 메시지 전송 기능
- 입력창에 메시지 작성
- 전송 버튼 클릭 시 메시지 등록
- 빈 메시지는 전송 불가 처리

### 4. 단체 메시지 기능
- 회원목록 데이터를 불러와 사용자 목록 확인
- 전체 채팅방 기준으로 단체 메시지 전송 가능

### 5. 데이터 저장
- `localStorage`를 이용해 메시지 데이터 유지
- 새로고침 후에도 기존 메시지 유지 가능

---

## 사용 예정 기술
- React
- React Router
- Context API
- localStorage
- Custom Hook (`useAuth`, `useLocalStorage`)
- CSS

---

## 관련 컴포넌트 / 파일
- `pages/Messenger.jsx`
- `components/ChatRoom.jsx`
- `components/UserList.jsx`
- `components/MessageInput.jsx`
- `context/AuthContext.jsx`
- `hooks/useLocalStorage.js`

---

## 예상 데이터 구조
### 메시지 데이터
```js
{
  id: Date.now(),
  roomId: "global",
  sender: currentUser.name,
  text: "안녕하세요",
  createdAt: new Date().toLocaleString()
}