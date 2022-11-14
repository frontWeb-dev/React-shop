import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./component/header/Header";

import GlobalStyle from "./style/global.styles";

// page
import Layout from "./pages/LayoutPage";
import Main from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
