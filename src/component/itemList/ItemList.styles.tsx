import styled from 'styled-components';
import { Inner } from '../../style/inner';

const ListWrapper = styled.div`
  width: 100%;
  padding: 48px 16px 32px 16px;
  background-color: #2a303c;
`;

const ListInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    // grid-auto-flow: column;
    grid-auto-columns: minmax(320px, 1fr);
    overflow-x: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Title = styled.h2`
  color: #a6aaba;
  margin-bottom: 32px;
`;

export { ListWrapper, ListInner, Title, ItemsContainer };
