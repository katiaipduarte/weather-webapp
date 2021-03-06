import styled from 'styled-components'

export const SearchBarContainer = styled.form`
    max-width: 24rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid white;
    margin: 0 auto 2.25rem;

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: auto;
      color: white;
    }

    #search-term-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 4rem;
      height: 4rem;
      filter: brightness(75%);
      cursor: pointer;
      border: none;
      display: none;
    }

    #clear-search-term-btn {
      background: none;
      border: none;
      cursor: pointer;
      vertical-align: middle;
      svg {
        color: white;
        height: 1rem;
      }
      &:focus {
        outline: none;
      }
    }

    input {
      border: none;
      color: white;
      outline: none;
      font-size: 1rem;
      width: calc(100% - 1rem);
      background: transparent;
      text-align: center;
      ::placeholder {
        color: white;
      }
    }
  }

  @media (min-width: 960px) {
    margin: 1rem 0 2.25rem;
    #search-term-btn {
      display: inherit;
    }

    input {
      text-align: initial;
    }
  }
`
