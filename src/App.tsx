import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global.styles';

// page
import Header from './component/header/header';
import Layout from './pages/LayoutPage';
import Main from './pages/MainPage';
import Footer from './component/footer/Footer';
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:category' element={<ListPage />} />
          <Route path='/product/:id'></Route>
          <Route element={<Layout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
