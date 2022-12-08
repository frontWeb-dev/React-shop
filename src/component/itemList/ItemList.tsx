import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListInner, Title, ItemsContainer } from './ItemList.styles';
import { dataProps, itemsProps } from '../../utils/type';
import Item from './Item';
import { useRecoilValue } from 'recoil';
import { getProducts } from '../../store/apis';
import { menu } from '../../mock/menu';

const ItemList = (props: { category: string }) => {
  const params = useParams();
  const products = useRecoilValue(getProducts('products'));

  const [data, setData] = useState<itemsProps[]>();
  const map = menu.filter((a) => a.category === props.category)[0].apiCategory;

  useEffect(() => {
    setData(products.filter((a: any) => a.category.match(map)));
  }, [map]);

  return (
    <ListWrapper>
      <ListInner>
        {data && (
          <>
            <Title>{props.category}</Title>
            <ItemsContainer>
              {params.category === undefined
                ? data.slice(0, 4).map((a) => <Item data={a} />)
                : data.map((a) => <Item data={a} />)}
            </ItemsContainer>
          </>
        )}
      </ListInner>
    </ListWrapper>
  );
};

export default ItemList;
