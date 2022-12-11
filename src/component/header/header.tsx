import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HiOutlineShoppingBag, HiOutlineSearch } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Hidden } from './../../style/hidden';
import {
  HeaderWrapper,
  HeaderInner,
  Gnb,
  SideBarButton,
  Logo,
  MenuList,
  Snb,
  ModeButton,
  SearchForm,
  SearchInput,
  SearchResult,
  CartButton,
  Bedge,
} from './header.styles';
import { CartItemState } from '../../store/atoms';
import { ThemeContext } from '../../context/ThemeProvider';
import SideBar from '../Modal/SideBar';
import { getProducts } from './../../store/apis';
import { itemsProps } from './../../utils/type';

const Header = ({}) => {
  const navigate = useNavigate();
  const products = useRecoilValue(getProducts('products'));
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const localData = JSON.parse(localStorage.getItem('Cart-data'))?.length || 0;
  const [items, setItems] = useRecoilState(CartItemState);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSeach] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSideBar(!sideBar);
    setFilter([]);
  };

  const onLinkClick = (id: number) => {
    navigate(`/product/${id}`);
    setSeach(!search);
    setSearchValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSeach(!search);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  useEffect(() => {
    if (searchValue === '') setFilter([]);
    else {
      setFilter(products.filter((a: itemsProps) => a.title.toLowerCase().includes(searchValue)));
    }
  }, [searchValue]);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Gnb>
          <SideBarButton onClick={handleClick}>
            <GiHamburgerMenu size={24} />
          </SideBarButton>
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
          <button onClick={handleSearchClick}>
            <HiOutlineSearch size={24} />
          </button>
          <SearchForm search={search}>
            <SearchInput
              type='text'
              placeholder='검색'
              onChange={handleChange}
              value={searchValue}
            />
            <SearchResult search={search}>
              {filter.length > 0 &&
                filter.map((a) => (
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                      e.preventDefault();
                      onLinkClick(a.id);
                    }}
                  >
                    {a.title}
                  </li>
                ))}
            </SearchResult>
          </SearchForm>

          <CartButton onClick={handleCartClick}>
            <Bedge>{items.length}</Bedge>
            <Bedge>{localData}</Bedge>
            <HiOutlineShoppingBag size={24} />
          </CartButton>
        </Snb>
      </HeaderInner>

      <SideBar setSideBar={setSideBar} sideBar={sideBar} />
    </HeaderWrapper>
  );
};

export default Header;
