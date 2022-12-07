import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataProps, itemsProps } from '../../utils/type';
import { ItemList, ProductImage, ProductInfo, ProductPrice, ButtonContainer } from './Cart.styles';

const CartItem = () => {
  const localData = JSON.parse(localStorage.getItem('Cart-data'));
  const [data, setData] = useState<itemsProps[]>([]);

  useEffect(() => {
    if (!localData) return;
    setData(
      localData.filter(
        (v: itemsProps, i: number) => localData.findIndex((x: itemsProps) => x.id === v.id) === i
      )
    );
  }, []);

  return (
    <div>
      {data.map((a: itemsProps) => (
        <ItemList>
          <Link to={`/product/${a.id}`}>
            <ProductImage>
              <img src={a.image} alt={a.title} width='100px' height='100px' />
            </ProductImage>
          </Link>
          <ProductInfo>
            <h3>
              <Link to={`/product/${a.id}`}>{a.title}</Link>
            </h3>
            <ProductPrice>
              {localData?.filter((b: itemsProps) => b.id === a.id).length * Math.ceil(a.price)}
            </ProductPrice>
            <ButtonContainer>
              <button>-</button>
              <div>{localData?.filter((b: itemsProps) => b.id === a.id).length * 1}</div>
              <button>+</button>
            </ButtonContainer>
          </ProductInfo>
        </ItemList>
      ))}
    </div>
  );
};

export default CartItem;
