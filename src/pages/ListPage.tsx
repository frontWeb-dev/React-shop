import React from 'react';
import ItemList from '../component/itemList/ItemList';
import { useParams } from 'react-router-dom';
import { menu } from '../mock/menu';
import Layout from '../component/common/Layout';
import ErrorPage from './ErrorPage';

const ListPage = () => {
  const { category } = useParams();
  const map = menu.filter((a) => a.url === category)[0]?.category;

  return (
    <>
      <Layout>
        {map && <ItemList category={map} />}
        <ErrorPage />
      </Layout>
    </>
  );
};

export default ListPage;
