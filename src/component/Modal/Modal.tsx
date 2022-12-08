import React, { useEffect } from 'react';
import { Wrapper, ModalContainer, ButtonContainer } from './Modal.styles';
import { modalProps } from '../../utils/type';
import { BgButton, BorderButton } from '../../style';
import { useRecoilState } from 'recoil';
import { CartItemState } from '../../store/atoms';

const Modal = (props: modalProps) => {
  const { isOpen, setIsOpen } = props;
  const [items, setItems] = useRecoilState(CartItemState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.getAttribute('data-type');
    if (type === 'yes') {
      window.localStorage.removeItem('Cart-data');
      setItems([]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <ModalContainer>
        <h3>정말로 구매하시겠습니까?</h3>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <ButtonContainer>
          <BgButton onClick={handleClick} data-type='yes'>
            네
          </BgButton>
          <BorderButton onClick={handleClick} data-type='no'>
            아니오
          </BorderButton>
        </ButtonContainer>
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
