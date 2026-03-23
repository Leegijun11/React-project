# 로그인 기반 커뮤니티 & 메신저 웹앱

회원가입 후 바로 로그인하여 서비스를 이용할 수 있고,  
로그인한 계정으로 게시글 작성, 댓글 작성, 메신저 기능을 사용할 수 있는 **React 기반 커뮤니티 웹앱**입니다.  
또한 모든 페이지에서 **페이지 이용시간**을 확인할 수 있으며, **관리자 / 일반 사용자 권한에 따라 출력 상태를 다르게 표시**합니다.

---

## 프로젝트 소개

이 프로젝트는 React를 기반으로 만든 **로그인형 커뮤니티 서비스**입니다.

사용자는 회원가입 후 자동으로 로그인되며,  
로그인한 계정으로 게시글을 작성하고 댓글을 남길 수 있습니다.  
또한 회원목록 정보를 활용하여 **단체 메시지 전송**이 가능하고,  
메시지에는 **전송 시간**이 함께 표시됩니다.

관리자 계정과 일반 사용자 계정을 구분하여  
출력되는 정보의 범위를 다르게 설정할 수 있도록 구현합니다.

---

## 개발 목적

- React의 컴포넌트 구조 설계
- React Router를 활용한 페이지 이동 구현
- 글로벌 상태관리 적용
- localStorage를 이용한 데이터 유지
- Custom Hook 제작 및 재사용
- CRUD 기능 구현
- 로그인 기반 권한 처리 연습

---

## 주요 기능

### 1. 회원가입 / 로그인
- 회원가입 후 **자동 로그인**
- 로그인 / 로그아웃 기능
- 로그인한 사용자만 게시글 작성 가능
- 로그인한 사용자만 메신저 사용 가능
- 관리자 / 일반 사용자 권한 구분

### 2. 게시글 기능
- 게시글 **등록 / 조회 / 수정 / 삭제**
- 게시글 목록에서 제목 클릭 시 상세페이지 이동
- 상세페이지에서 **제목 / 내용 / 작성자** 출력
- 로그인한 계정 기준으로 작성자 정보 저장

### 3. 댓글 기능
- 댓글 **등록 / 조회 / 수정 / 삭제**
- 게시글 상세페이지에서 댓글 작성 가능
- 로그인한 사용자 계정으로 댓글 작성

### 4. 메신저 기능
- 로그인한 사용자만 접근 가능
- 회원목록 기반 **단체 메시지 전송**
- 메시지 전송 시간 표시
- 로그인한 계정 기준으로 발신자 구분

### 5. 페이지 이용시간 출력
- 모든 페이지에서 공통으로 이용시간 출력
- 공통 Layout 또는 Navbar에 표시

### 6. 관리자 / 일반 사용자 구분
- 관리자: 회원 정보 전체 출력 가능 (`id`, `pw` 등)
- 일반 사용자: 제한된 정보만 출력
- 권한에 따라 화면 표시 상태 변경

---

## 기술 스택

- **React**
- **React Router DOM**
- **Context API / Redux**  
- **localStorage**
- **Custom Hook**
- **CSS**

---

## Custom Hook

### `useAuth`
로그인, 로그아웃, 회원가입 후 자동 로그인 처리와  
현재 로그인 사용자 정보를 관리하는 커스텀 훅입니다.

### `useLocalStorage`
localStorage와 상태를 연동하여  
회원정보, 게시글, 댓글, 메시지 데이터를 저장하고 불러오는 커스텀 훅입니다.

---

## 컴포넌트 구성 예시

- `App.jsx`
- `Home.jsx`
- `Login.jsx`
- `Signup.jsx`
- `PostList.jsx`
- `PostDetail.jsx`
- `PostForm.jsx`
- `Messenger.jsx`
- `Navbar.jsx`
- `Layout.jsx`
- `CommentList.jsx`
- `CommentForm.jsx`

> `App.jsx` 포함 8개 이상의 컴포넌트로 구성

---

## 폴더 구조 예시

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Layout.jsx
│   ├── CommentList.jsx
│   ├── CommentForm.jsx
│   └── Timer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── PostList.jsx
│   ├── PostDetail.jsx
│   ├── PostForm.jsx
│   └── Messenger.jsx
├── hooks/
│   ├── useAuth.js
│   └── useLocalStorage.js
├── context/
│   ├── AuthContext.jsx
│   ├── PostContext.jsx
│   └── ChatContext.jsx
├── router/
│   └── ProtectedRoute.jsx
├── App.jsx
└── main.jsx
