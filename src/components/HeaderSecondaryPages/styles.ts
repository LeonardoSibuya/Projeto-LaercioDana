import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors, Container } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${Colors.black};
  padding: 16px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 6px 0 6px #000;
  border-radius: 0px 0px 16px 16px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      cursor: pointer;

      &.is-hidden {
        span {
          background-color: transparent;
        }
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
  }

  h2 {
    color: ${Colors.white};
    font-size: 32px;
    font-weight: bold;
    font-family: 'Teko', sans-serif;
  }
`
export const LinkLogo = styled(Link)`
  img {
    width: 80px;
    max-width: 100%;
  }
`
