import styled from 'styled-components'

import { Colors } from '../../styles'

export const ContainerVideo = styled.div`
  margin-top: 160px;

  h3 {
    margin-bottom: 24px;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 24px;

  iframe {
    width: 100%;
    max-width: 100%;
    height: 320px;
    box-shadow: 3px 3px 6px #000;
    border-radius: 8px;
  }

  p {
    color: ${Colors.white};
    font-size: 16px;
    width: 80%;
    max-width: 100%;
    line-height: 22px;
  }
`
