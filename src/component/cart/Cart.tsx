import React, { useEffect, useState } from 'react';
import { BgButton } from '../../style';
import { itemsProps } from '../../utils/type';
import Modal from '../Modal/Modal';
import { Category, EmptyText, CartContainer, TotalContainer } from './Cart.styles';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CartItemState } from '../../store/atoms';

const Cart = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const localData = JSON.parse(localStorage.getItem('Cart-data'));
  const [items, setItems] = useRecoilState(CartItemState);

  const totalPrice = localData
    ?.map((a: itemsProps) => a.price)
    .reduce((prev: number, current: number) => Math.ceil(prev + current), 0);

  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <Category>홈 &gt; 장바구니</Category>

      {!localData ? (
        <>
          <EmptyText>장바구니에 물품이 없습니다.</EmptyText>
          <BgButton onClick={handleHomeClick}>담으러가기</BgButton>
        </>
      ) : (
        <CartContainer>
          <CartItem />
          <TotalContainer>
            <p>총 : $ {totalPrice}</p>
            <BgButton onClick={handleClick}>구매하기</BgButton>
          </TotalContainer>
        </CartContainer>
      )}

      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Cart;
