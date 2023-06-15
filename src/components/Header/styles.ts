import styled from 'styled-components'

import { Colors, breakpoints } from '../../styles'

export const HeaderContainer = styled.header`
  text-align: center;
  position: relative;

  h1 {
    img {
      width: 140px;
      max-width: 100%;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100px;
      }
    }
  }

  div {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 32px;
    padding-left: 32px;
    cursor: pointer;

    &.is-hidden {
      display: none;
    }

    span {
      width: 32px;
      height: 4px;
      background-color: ${Colors.white};
      display: block;
      margin: 4px 0;
      border-radius: 16px;
    }
  }
`
