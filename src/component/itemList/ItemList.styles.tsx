import styled from 'styled-components';
import { Inner } from '../../style';

const ListWrapper = styled.div<{ params: string | undefined }>`
  width: 100%;
  padding: ${(props) => (props.params ? '0.5rem 1rem' : '48px 16px')};
  background-color: ${(props) => props.theme.mainBgColor};
`;

const ListInner = styled(Inner)``;

const ListNav = styled.p`
  padding: 0.5rem 0;
  font-size: 14px;
  color: ${(props) => props.theme.mainTextColor};

  span {
    opacity: 0.6;
  }
`;

const CategoryItems = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-flow: column;
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
  color: ${(props) => props.theme.mainTextColor};
  text-align: center;
  margin-bottom: 32px;
`;

export { ListWrapper, ListInner, ListNav, Title, CategoryItems, ItemsContainer };
