import React from 'react';
import { ItemWrapper, ImageContainer, ItemImage, InfoContainer } from './Item.styles';
import { useNavigate } from 'react-router-dom';
import { itemProps } from '../../utils/type';

const Item = ({ data }: itemProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(`/product/${data.id}`, { state: data });
  };

  return (
    <ItemWrapper onClick={handleClick}>
      <ImageContainer>
        <ItemImage src={data.image} />
      </ImageContainer>
      <InfoContainer>
        <p>{data.title}</p>
        <p>$ {Math.ceil(data.price)}</p>
      </InfoContainer>
    </ItemWrapper>
  );
};

export default Item;
