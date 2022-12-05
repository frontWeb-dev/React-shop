import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from './header.styles';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDark);
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
          <ModeButton onClick={handleClick} isDark={isDark}>
            <Hidden>모드 변경 버튼</Hidden>
          </ModeButton>
          <SearchForm>
            <SearchInput type='text' placeholder='검색' />
          </SearchForm>
          <CartButton>
            <HiOutlineShoppingBag size={24} />
          </CartButton>
        </Snb>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
