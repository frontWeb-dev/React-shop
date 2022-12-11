import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.mainBgColor};
  }

  h1,h2,h3,p {
    margin : 0
  };

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
