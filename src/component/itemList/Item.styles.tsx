import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: ${(props) => props.theme.border};
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
  gap: 20px;
  padding: 1.5rem;
  color: ${(props) => props.theme.mainTextColor};
  font-weight: 600;
  background-color: ${(props) => props.theme.subBgColor};

  p:last-child {
    font-weight: 400;
  }
`;

export { ItemWrapper, ImageContainer, ItemImage, InfoContainer };
