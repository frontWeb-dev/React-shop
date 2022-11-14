import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutPage = () => {
  const Wrapper = styled.div`
    width: 100%;
    margin-top: 64px;
  `;

  const Inner = styled.div`
    width: 1360px;
    margin: 0 auto;
  `;
  return (
    <Wrapper>
      <Inner>
        <Outlet />
      </Inner>
    </Wrapper>
  );
};

export default LayoutPage;
