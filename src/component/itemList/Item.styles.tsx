import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
`;

const ItemImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  color: #a6aaba;
  font-size: 0.9rem;
  background-color: #374151;
`;

export { ItemWrapper, ImageContainer, ItemImage, InfoContainer };
