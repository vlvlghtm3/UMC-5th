import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPageWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 25px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 10px;
  margin-bottom: ${({ show }) => (show ? '10px' : '0')};
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
  }
`;

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const navigate = useNavigate();



  const handleIdChange = (e) => {
    const inputValue = e.target.value;
    setId(inputValue);
    const isValidId = inputValue === 'umcweb';
    setIdError(!isValidId && inputValue !== '');
  };

  const handlePwChange = (e) => {
    const inputValue = e.target.value;
    setPw(inputValue);
    const isValidPw = inputValue === '1234';
    setPwError(!isValidPw && inputValue !== '');
  };

  const isValidId = id === 'umcweb';
  const isValidPw = pw === '1234';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidId && isValidPw) {
      alert('로그인 성공!');
      navigate('/home');
    }
  };
  const fetchData = async () => {
    try {
      const endpoint = 'http://localhost:8080/user/login';
      const requestBody = {
        id: "umcweb",
        pw: "1234"
      };

      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(endpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      // 응답 데이터 확인
      console.log(response.data);
    } catch (error) {
      // 오류 처리
      console.log('Error during POST request:', error);
    }
  };
  return (
    <LoginPageWrapper>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={handleIdChange}
        />
        <ErrorMessage show={idError}>
          올바른 아이디를 입력해 주세요.
        </ErrorMessage>
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePwChange}
        />
        <ErrorMessage show={pwError}>
          올바른 비밀번호를 입력해 주세요.
        </ErrorMessage>
        <Button type="submit" disabled={!isValidId || !isValidPw}>
          로그인
        </Button>
        <button onClick={fetchData}>post 요청</button>
      </Form>
    </LoginPageWrapper>
  );
};

export default LoginPage;
