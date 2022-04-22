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
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }

    main {
      margin-bottom: auto;
      padding: 0 1rem;
      flex-direction: column;

      .sidebar {
        display: none;
      }
    }

    @media all and (min-width: 960px) {
      h2 {
        font-size: 5rem;
      }

      main {
        width: 65%;
        padding: 0 3rem;

        .sidebar {
          background-color: rgba(0, 0, 0, 0.75);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          padding: 1rem 4rem;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          display: block;
          width: 35%;
        }
      }
    }
  }
`
