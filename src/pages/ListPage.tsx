import React from 'react';
import ItemList from './../component/itemList/ItemList';
import { useParams } from 'react-router-dom';
import { menu } from './../mock/menu';
import Layout from './../component/common/Layout';

const ListPage = () => {
  const { category } = useParams();
  const map = menu.filter((a) => a.url === category)[0].category;

  return (
    <>
      <Layout>
        <ItemList category={map} />
      </Layout>
    </>
  );
};

export default ListPage;
