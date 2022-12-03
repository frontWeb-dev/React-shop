import styled from 'styled-components';
import { Inner } from '../../style/inner';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  color: #fff;
  background-color: #191a24;
  z-index: 1;
`;
const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Gnb = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  margin-right: 16px;
`;
const Logo = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  li:hover {
    border-radius: 5px;
    background-color: rgba(166, 173, 186, 0.2);
  }

  a {
    display: block;
    padding: 6px 12px;
    font-size: 14px;
  }
`;
const Snb = styled.div`
  display: flex;
  align-items: center;
`;

const ModeButton = styled.button`
  width: 48px;
  height: 48px;
  color: #fff;
`;
const SearchForm = styled.form``;
const SearchInput = styled.input`
  width: 185px;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #4b5563;
`;
const CartButton = styled(ModeButton)`
  margin-left: 4px;
  &:hover {
    border-radius: 5px;
    background-color: rgba(166, 173, 186, 0.2);
  }
`;

export {
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
};
