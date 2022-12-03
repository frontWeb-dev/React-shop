import styled, { css } from 'styled-components';

export const Inner = styled.div`
  width: 1360px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1025px) {
    max-width: 1025px;
  }
  @media (min-width: 1360px) {
    max-width: 100%;
  }
`;
