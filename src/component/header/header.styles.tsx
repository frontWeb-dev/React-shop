import styled from 'styled-components';
import { Inner } from '../../style';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  font-weight: 600;
  color: ${(props) => props.theme.subTextColor};
  background-color: ${(props) => props.theme.headerBgColor};
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  z-index: 9999;
`;
const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;
const Gnb = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 16px;
`;

const SideBarButton = styled.button`
  display: none;
  width: 26px;
  height: 48px;
  padding: 0;
  margin-right: 13px;
  color: ${(props) => props.theme.mainTextColor};
  background-color: transparent;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.hoverBgColor};
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 767px) {
    display: none;
  }

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

const SearchForm = styled.form<{ search: boolean }>`
  @media (max-width: 480px) {
    position: absolute;
    top: ${(props) => (props.search ? '64px' : '-64px')};
    left: 0;
    width: 100%;
    transition: all 0.3s;
    opacity: ${(props) => (props.search ? '1' : '0')};
  }
`;

const SearchInput = styled.input`
  width: 185px;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.searchColor};
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  z-index: 9999;

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 0;
  }
`;

const SearchResult = styled.ul<{ search: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 16rem;
  max-height: 16rem;
  overflow-y: auto;
  background-color: ${(props) => props.theme.searchColor};

  li {
    max-height: 72px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    padding: 0.75rem 1rem;
    border-radius: 5px;

    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &:hover {
      background-color: ${(props) => props.theme.hoverBgColor};
    }
  }

  @media (max-width: 480px) {
    position: fixed;
    display: flex;
    left: 0;
    border-radius: 0;
    max-width: 100%;
  }
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
  SideBarButton,
  Logo,
  MenuList,
  Snb,
  ModeButton,
  SearchForm,
  SearchResult,
  SearchInput,
  CartButton,
  Bedge,
};
