import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 160px;

  @media (max-width: ${breakpoints.celphone}) {
    max-width: 100%;
    width: 100%;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .item {
    img {
      height: 600px;
      width: 800px;
      pointer-events: none;
      border-radius: 8px;
      object-fit: cover;

      @media (max-width: ${breakpoints.tablet}) {
        width: 400px;
        height: 440px;
      }

      @media (max-width: ${breakpoints.celphone}) {
        width: 220px;
        height: 320px;
      }
    }
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`
