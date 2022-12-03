import styled from 'styled-components';

const ItemWrapper = styled.div``;

const ImageContainer = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  min-height: 6rem;
  color: #a6aaba;
  font-size: 0.9rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: #374151;
`;
export { ItemWrapper, ImageContainer, ItemImage, InfoContainer };
