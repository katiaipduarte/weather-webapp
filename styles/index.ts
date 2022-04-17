import styled, { createGlobalStyle } from 'styled-components'
import { ResetCSS } from './reset-css'

export const Logo = styled.h1`
	font-size: 0.75rem;
	font-weight: 600;
	color: white;
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

    main {
      width: 100vw;
      height: 100vh;
      padding: 2.5rem 8rem;
      display: flex;
      flex-direction: column;

      h1,h2,h3,h4,h5,h6,p,span {
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
  }
`
