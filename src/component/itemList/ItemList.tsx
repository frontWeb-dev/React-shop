import React from 'react';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListInner, Title, ItemsContainer } from './ItemList.styles';
import { dataProps } from '../../utils/type';
import Item from './Item';

const ItemList = (props: dataProps) => {
  const params = useParams();

  return (
    <ListWrapper>
      <ListInner>
        <Title>{props.category}</Title>
        <ItemsContainer>
          {params.id === undefined
            ? props.data.slice(0, 4).map((a) => <Item data={a} />)
            : props.data.map((a) => <Item data={a} />)}
        </ItemsContainer>
      </ListInner>
    </ListWrapper>
  );
};

export default ItemList;
