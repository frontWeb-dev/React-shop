import React from 'react';
import { useLocation } from 'react-router';
import {
  DetailWrapper,
  DetailNav,
  DetailContainer,
  DetailImage,
  ItemInfo,
  ItemName,
  ItemRate,
  ItemPrice,
  ButtonContainer,
  CartButton,
} from './ItemDetail.styles';
import Chip from '../common/Chip';

const ItemDetail = () => {
  const { state } = useLocation();

  return (
    <DetailWrapper>
      <DetailNav>
        {state.category}
        <span> &gt; </span>
        {state.title}
      </DetailNav>
      <DetailContainer>
        <DetailImage>
          <img src={state.image} alt={state.title} />
        </DetailImage>
        <ItemInfo>
          <ItemName>
            <h3>{state.title}</h3>
            <Chip>NEW</Chip>
          </ItemName>
          <p>{state.description}</p>
          <ItemRate>
            <p>
              {state.rating.rate} / {state.rating.count} 참여
            </p>
          </ItemRate>
          <ItemPrice>$ {state.price}</ItemPrice>
          <ButtonContainer>
            <CartButton bgColor='#6419e6'>장바구니에 담기</CartButton>
            <CartButton>장바구니로 이동</CartButton>
          </ButtonContainer>
        </ItemInfo>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default ItemDetail;
