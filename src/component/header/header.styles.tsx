import styled from 'styled-components';
import { Inner } from '../../style';

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

const ModeButton = styled.button<{ isDark: boolean }>`
  width: 28px;
  height: 28px;
  margin-right: 16px;
  color: #fff;
  background: ${(props) =>
      props.isDark ? `url('/assets/asset 16.svg')` : `url('/assets/asset 17.svg')`}
    no-repeat center / cover;
  filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(355deg) brightness(105%) contrast(105%);
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
const CartButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: 4px;
  color: #fff;
  &:hover {
    border-radius: 5px;
    background-color: rgba(166, 173, 186, 0.2);
  }
`;

const Bedge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  background-color: red;
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
  Bedge,
};
