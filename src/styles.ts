import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  lightBlue: '#009ad9',
  darkBlueOne: '#020D11',
  darkBlueTwo: '#061519',

  gray: '#a8a1a1',
  white: '#fff',
  black: '#000',
  cyan: '#099e76'
}

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-image: radial-gradient(circle at 50% 50%, #0d2d46 0, #000e1b 50%, #000000 100%);
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
