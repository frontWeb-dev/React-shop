import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CartItemState } from '../../store/atoms';
import { itemsProps } from '../../utils/type';
import { ItemList, ProductImage, ProductInfo, ProductPrice, ButtonContainer } from './Cart.styles';

const CartItem = () => {
  const localData = JSON.parse(localStorage.getItem('Cart-data'));
  const [items, setItems] = useRecoilState(CartItemState);
  const [data, setData] = useState<itemsProps[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const id = e.currentTarget.dataset.id;
    const type = e.target.dataset['type'];

    if (type === 'plus') {
      const filter = localData.find((a: itemsProps) => a.id === +id);
      setItems([...items, filter]);
      localData.push(filter);
      localStorage.setItem('Cart-data', JSON.stringify(localData));
    }
    if (type === 'minus') {
      const filter = localData.findIndex((a: itemsProps) => a.id === +id);
      setItems((cur: any) => {
        let copy = cur.filter((_: itemsProps, i: number) => i !== filter);
        return copy;
      });
      let copy = localData.filter((_: itemsProps, i: number) => i !== filter);
      localStorage.setItem('Cart-data', JSON.stringify(copy));
    }
  };

  useEffect(() => {
    if (!localData) return;
    setItems(localData);
    setData(
      localData.filter(
        (v: itemsProps, i: number) => localData.findIndex((x: itemsProps) => x.id === v.id) === i
      )
    );
  }, []);

  return (
    <div>
      {data.map((a: itemsProps) => (
        <>
          {localData?.filter((b: itemsProps) => b.id === a.id).length > 0 && (
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
                <ButtonContainer onClick={handleClick} data-id={a.id}>
                  <button data-type='minus'>-</button>
                  <div>{localData?.filter((b: itemsProps) => b.id === a.id).length * 1}</div>
                  <button data-type='plus'>+</button>
                </ButtonContainer>
              </ProductInfo>
            </ItemList>
          )}
        </>
      ))}
    </div>
  );
};

export default CartItem;
