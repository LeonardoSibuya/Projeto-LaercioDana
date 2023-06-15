import styled from 'styled-components'

import { CarouselContainer } from '../../components/Carousel/styles'
import { breakpoints } from '../../styles'

export const ContainerProducts = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    ${CarouselContainer} {
      display: none;
    }
  }
`
