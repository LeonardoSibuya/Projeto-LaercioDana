import styled from 'styled-components'

import { Colors } from '../../styles'

export const ContainerVideo = styled.div`
  margin-top: 160px;

  h3 {
    margin-bottom: 24px;
  }

  iframe {
    width: 100%;
    max-width: 100%;
    box-shadow: 3px 3px 6px #000;
    border-radius: 8px;
    object-fit: cover;
    height: 440px;
  }
`
