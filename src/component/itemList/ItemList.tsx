import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ListWrapper,
  ListInner,
  ListNav,
  Title,
  ItemsContainer,
  CategoryItems,
} from './ItemList.styles';
import { itemsProps } from '../../utils/type';
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
    <ListWrapper params={params.category}>
      {params.category !== undefined && <ListNav>홈 &gt; {props.category}</ListNav>}
      <ListInner>
        {data && (
          <>
            <Title>{props.category}</Title>
            {params.category === undefined ? (
              <ItemsContainer>
                {data.slice(0, 4).map((a) => (
                  <Item data={a} />
                ))}
              </ItemsContainer>
            ) : (
              <CategoryItems>
                {data.map((a) => (
                  <Item data={a} />
                ))}
              </CategoryItems>
            )}
          </>
        )}
      </ListInner>
    </ListWrapper>
  );
};

export default ItemList;
