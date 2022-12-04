import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global.styles';

// page
import Header from './component/header/header';
import Main from './pages/MainPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:category' element={<ListPage />} />
          <Route path='/product/:id' element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
