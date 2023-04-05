import styled from 'styled-components'

import { Props } from '.'

export const Subtitle = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '24px')};
  color: #000;
  font-weight: bold;
  font-family: 'Teko', sans-serif;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
