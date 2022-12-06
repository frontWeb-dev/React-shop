import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import ItemList from '../component/itemList/ItemList';
import { CartItemState, totalPriceState } from '../store/atoms';

const CartPage = () => {
  const [items, setItems] = useRecoilState(CartItemState);
  const [data, setData] = useState<any>([]);
  const totalPrice = useRecoilValue(totalPriceState);

  useEffect(() => {
    setData([...new Set(items)]);
  }, []);

  if (data.length === 0) {
    return <div style={{ marginTop: '100px' }}>장바구니에 담은 상품이 없어요</div>;
  }

  return (
    <div style={{ marginTop: '100px' }}>
      {data.map((a) => (
        <div style={{ display: 'flex' }}>
          <div>
            <img src={a.image} alt={a.title} width='100px' height='100px' />
          </div>
          <div>
            <Link to={`/product/${a.id}`}>{a.title}</Link>
            <div>{items.filter((b) => b.id === a.id).length * a.price}</div>
            <div style={{ display: 'flex' }}>
              <button>-</button>
              <div>{items.filter((b) => b.id === a.id).length * 1}</div>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}

      <div>
        <h3>total</h3>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default CartPage;
