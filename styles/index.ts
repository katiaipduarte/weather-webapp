import styled, { createGlobalStyle } from 'styled-components'
import { ResetCSS } from './reset-css'

export const Sidebar = styled.section`
	width: 25%;
	background-color: rgba(0, 0, 0, 0.45);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	padding: 1rem;
`

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
