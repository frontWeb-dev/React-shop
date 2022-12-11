import styled from 'styled-components';
import { Inner } from '../../style';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  font-weight: 600;
  color: ${(props) => props.theme.subTextColor};
  background-color: ${(props) => props.theme.mainBgColor};
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
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

const ModeButton = styled.button<{ isDark: string }>`
  width: 28px;
  height: 28px;
  margin-right: 16px;
  color: #fff;
  background: ${(props) =>
      props.isDark === 'dark' ? `url('/assets/asset 16.svg')` : `url('/assets/asset 17.svg')`}
    no-repeat center / cover;
  filter: ${(props) => props.theme.svgFilter};
`;

const SearchForm = styled.form``;
const SearchInput = styled.input`
  width: 185px;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.searchColor};
`;
const CartButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: 4px;
  color: ${(props) => props.theme.subTextColor};
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
  color: #fff;
  background-color: ${(props) => props.theme.accentColor};
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
