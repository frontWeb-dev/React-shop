import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineShoppingBag,
} from "react-icons/hi";
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
} from "./header.styles";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Gnb>
          <Logo>React Shop</Logo>

          <MenuList>
            <li>
              <Link to="">패션</Link>
            </li>
            <li>
              <Link to="">악세서리</Link>
            </li>
            <li>
              <Link to="">디지털</Link>
            </li>
          </MenuList>
        </Gnb>
        <Snb>
          <ModeButton onClick={handleClick}>
            {isDark ? <HiOutlineSun size={24} /> : <HiOutlineMoon size={24} />}
          </ModeButton>
          <SearchForm>
            <SearchInput type="text" placeholder="검색" />
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
