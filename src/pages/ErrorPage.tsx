import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 4rem - 224px);
  padding-top: 4rem;
  background-color: ${(props) => props.theme.mainBgColor};
  color: ${(props) => props.theme.mainTextColor};
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 8rem;
  margin-top: 7rem;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin-top: 5ree;
  }
`;

const Text = styled.p`
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.subTextColor};
    background-color: #6419e6;
  }
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>페이지를 찾을 수 없습니다.</Text>
      <Button>
        <Link to='/'>메인으로</Link>
      </Button>
    </Wrapper>
  );
};

export default ErrorPage;
