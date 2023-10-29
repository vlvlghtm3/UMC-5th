import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 70px;
  border-radius: 10px;
`;
const Text = styled.div`
  padding-left: 10px;
`;
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? (
          <Wrap>
            <Button onClick={this.handleLogoutClick}>로그아웃</Button>
            <Text>환영합니다!</Text>
          </Wrap>
        ) : (
          <Wrap>
            <Button onClick={this.handleLoginClick}>로그인</Button>
            <Text>로그인이 해주세요!</Text>
          </Wrap>
        )}
      </div>
    );
  }
}

export default LoginControl;
