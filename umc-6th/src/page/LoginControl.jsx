import React, { useState } from 'react';
import styled from 'styled-components';

const LoginControlWrap = styled.div`
  display: flex;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LoginControlWrap>
          <button onClick={handleLogout}>로그아웃</button>
          <div>환영합니다!</div>
        </LoginControlWrap>
      ) : (
        <LoginControlWrap>
          <button onClick={handleLogin}>로그인</button>
          <div>로그인 해주세요!</div>
        </LoginControlWrap>
      )}
    </div>
  );
}

export default App;
