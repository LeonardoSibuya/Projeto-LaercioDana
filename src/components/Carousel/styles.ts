import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 160px;

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .item {
    img {
      height: 400px;
      width: 480px;
      pointer-events: none;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`
