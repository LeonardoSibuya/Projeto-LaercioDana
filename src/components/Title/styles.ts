import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h2<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '32px')};
  color: #000;
  font-weight: bold;
  font-family: 'Teko', sans-serif;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`
