import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from './style/global.styles';

// page
import Header from './component/header/header';
import Main from './pages/MainPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import Footer from './component/footer/Footer';
import CartPage from './pages/CartPage';
import ThemeProvider from './context/ThemeProvider';
import Loading from './component/common/Loading';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/:category' element={<ListPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/product/:id' element={<DetailPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
function useColorScheme() {
  throw new Error('Function not implemented.');
}
