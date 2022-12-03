import React, { useEffect, useState } from 'react';
import Banner from '../component/banner/Banner';
import { getProducts } from './../api/apis';
import ItemList from './../component/itemList/ItemList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataProps } from './../utils/type';

const mainPage = () => {
  const products = useRecoilValue(getProducts('products'));
  const [fashion, setFashion] = useState();
  const [jewelery, setJewelery] = useState();
  const [digital, setDigital] = useState();

  useEffect(() => {
    setFashion(
      products.filter(
        (prod: dataProps) =>
          prod.category === "man's clothing" || prod.category === "women's clothing"
      )
    );
    setJewelery(products.filter((prod: dataProps) => prod.category === 'jewelery'));
    setDigital(products.filter((prod: dataProps) => prod.category === 'electronics'));
  }, []);

  return (
    <>
      <Banner />
      {fashion && <ItemList data={fashion} category='패션' />}
      {jewelery && <ItemList data={jewelery} category='액세서리' />}
      {digital && <ItemList data={digital} category='디지털' />}
    </>
  );
};

export default mainPage;
