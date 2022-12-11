import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Hidden } from './../../style/hidden';
import {
  HeaderWrapper,
  HeaderInner,
  Gnb,
  Logo,
  MenuList,
  Snb,
  ModeButton,
  SearchForm,
  SearchInput,
  CartButton,
  Bedge,
} from './header.styles';
import { CartItemState } from '../../store/atoms';
import { ThemeContext } from '../../context/ThemeProvider';

const Header = ({}) => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem('Cart-data'))?.length || 0;
  const [items, setItems] = useRecoilState(CartItemState);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Gnb>
          <Logo>
            <Link to='/'>React Shop</Link>
          </Logo>

          <MenuList>
            <li>
              <Link to='/fashion'>패션</Link>
            </li>
            <li>
              <Link to='/jewelry'>악세서리</Link>
            </li>
            <li>
              <Link to='/digital'>디지털</Link>
            </li>
          </MenuList>
        </Gnb>
        <Snb>
          <ModeButton onClick={onChangeTheme} isDark={theme}>
            <Hidden>모드 변경 버튼</Hidden>
          </ModeButton>
          <SearchForm>
            <SearchInput type='text' placeholder='검색' />
          </SearchForm>
          <CartButton onClick={handleCartClick}>
            <Bedge>{items.length}</Bedge>
            <Bedge>{localData}</Bedge>
            <HiOutlineShoppingBag size={24} />
          </CartButton>
        </Snb>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
