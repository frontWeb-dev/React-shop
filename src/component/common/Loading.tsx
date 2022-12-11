import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.mainTextColor};
`;

const Loading = () => {
  return (
    <Layout>
      <Title>상품 목록을 불러오는 중입니다..</Title>
    </Layout>
  );
};

export default Loading;
