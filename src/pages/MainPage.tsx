import React from 'react';
import Banner from '../component/banner/Banner';
import ItemList from '../component/itemList/ItemList';
import { menu } from '../mock/menu';

const mainPage = () => {
  return (
    <>
      <Banner />
      {menu.map((a) => (
        <ItemList category={a.category} />
      ))}
    </>
  );
};

export default mainPage;
