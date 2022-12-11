import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBgColor: string;
    subBgColor: string;
    mainTextColor: string;
    subTextColor: string;
    buttonColor: string;
    border: string;
    searchColor: string;
    accentColor: string;
    svgFilter: string;
    hoverBgColor: string;
    headerBgColor: string;
  }
}
