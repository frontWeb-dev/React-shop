import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
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
import { CartItemState } from '../../store/atoms';
import { getProducts } from '../../store/apis';

const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useRecoilValue(getProducts('products'));
  const [items, setItems] = useRecoilState(CartItemState);
  const state = id && products.filter((a) => a.id === +id)[0];

  const star =
    state.rating.rate % 10 !== 0 ? Math.floor(state.rating.rate) + 'half' : state.rating.rate;

  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItems((cur: any) => [...cur, state]);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/cart');
  };

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
            <AddCartButton onClick={handleAddClick}>장바구니에 담기</AddCartButton>
            <GoCartButton onClick={handleClick}>장바구니로 이동</GoCartButton>
          </ButtonContainer>
        </ItemInfo>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default ItemDetail;
