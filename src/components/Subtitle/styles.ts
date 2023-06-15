import styled from 'styled-components'

import { Colors, breakpoints } from '../../styles'

export const SubtitleStyle = styled.h3`
  color: ${Colors.white};
  font-size: 32px;
  font-weight: bold;
  font-family: 'Teko', sans-serif;

  @media (max-width: ${breakpoints.celphone}) {
    font-size: 20px;
  }
`
