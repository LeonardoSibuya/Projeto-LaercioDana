import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Content = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
    margin-right: 32px;
    margin-bottom: 32px;
    transition: 0.5s ease;

    @media (max-width: ${breakpoints.celphone}) {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      margin-bottom: 16px;
    }

    &:hover {
      transform: scale(0.9);
      opacity: 0.3;
      transition: 0.5s ease;
    }
  }
`
