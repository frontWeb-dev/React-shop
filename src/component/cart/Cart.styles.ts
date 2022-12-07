import styled from 'styled-components';
import { CartButton } from '../../style';

const Category = styled.p`
  margin-bottom: 50px;
  padding: 8px 0;
  font-size: 14px;
  color: #a6aaba;

  span {
    opacity: 0.6;
  }
`;

const EmptyText = styled.p`
  color: #a6aaba;
  margin-bottom: 40px;
  font-size: 24px;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1025px) {
    display: block;
  }
`;

const ItemsList = styled.div``;
const ItemList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1025px) {
    display: block;
  }
`;

const ProductImage = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;

  a {
    display: block;
    padding: 1rem;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: contain;
  }

  @media (max-width: 1025px) {
    min-width: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 3rem;
  color: #a6aaba;

  @media (max-width: 1025px) {
    padding: 1rem 0.25rem;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ProductPrice = styled.p`
  font-size: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
`;

const CountButton = styled(CartButton)`
  height: 3rem;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: flex-start;
  color: #a6aaba;
  font-size: 1.5rem;
  margin: 2.5rem 0 5rem 0;

  p {
    margin-right: 1.5rem;
  }
`;

export {
  Category,
  EmptyText,
  CartContainer,
  ItemsList,
  ItemList,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ButtonContainer,
  CountButton,
  TotalContainer,
};
