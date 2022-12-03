import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getProducts } from '../api/apis';
import ItemList from './../component/itemList/ItemList';
import { useParams } from 'react-router-dom';

const ListPage = () => {
  const products = useRecoilValue(getProducts('products'));
  const { category } = useParams();
  const [data, setData] = useState();

  return <></>;
};

export default ListPage;
