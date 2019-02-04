 import styled, { createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import { darken } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800');
  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    line-height: normal;
    font-family: 'Muli', sans-serif;
    font-weight: 400;
    background-color: ${darken(.1, 'white')};
    -webkit-font-smoothing: antialiased;
  }
  textarea, select, input, button {
    outline: none;
    border: none;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 0 60px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;

export default GlobalStyles;
