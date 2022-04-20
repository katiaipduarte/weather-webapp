import { createGlobalStyle } from 'styled-components'
import { ResetCSS } from './reset-css'

export const GlobalStyle = createGlobalStyle`
 ${ResetCSS}

  * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1, h2, h3, h4, h5, h6, p, span {
      cursor: default;
      color: white;
      opacity: 1;
      z-index: 999;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`
