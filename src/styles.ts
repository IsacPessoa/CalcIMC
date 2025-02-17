import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#D8CAB8',
  black: '#1C1C1C',
  white: '#FFFFFF',
  gray: '#EDEDED',
  pink: '#FF4F91'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: ${colors.gray};

    @media (max-width: 768px) {
    background-color: ${colors.white};
  }
  }

`

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
