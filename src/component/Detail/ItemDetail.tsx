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
  RateImage,
  ItemPrice,
  ButtonContainer,
} from './ItemDetail.styles';
import { AddCartButton, GoCartButton } from '../../style';
import Chip from '../common/Chip';
import { rate } from '../../mock/rate';

const ItemDetail = () => {
  const { state } = useLocation();
  const star =
    state.rating.rate % 10 !== 0 ? Math.floor(state.rating.rate) + 'half' : state.rating.rate;

  console.log(star, rate[0][star]);

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
            <RateImage rating={rate[0][star]}></RateImage>
            <p>
              {state.rating.rate} / {state.rating.count} 참여
            </p>
          </ItemRate>
          <ItemPrice>$ {Math.ceil(state.price)}</ItemPrice>
          <ButtonContainer>
            <AddCartButton>장바구니에 담기</AddCartButton>
            <GoCartButton>장바구니로 이동</GoCartButton>
          </ButtonContainer>
        </ItemInfo>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default ItemDetail;
