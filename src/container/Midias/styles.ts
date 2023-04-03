import styled from 'styled-components'

export const MidiaContainer = styled.div`
  padding-top: 160px;

  h2 {
    text-align: center;
  }
`
export const ImageContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  margin 24px 0 160px;
`
export const ListImages = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  position: relative;

  :hover > :not(:hover) {
    filter: blur(3px);
  }

  li{
    position: relative;
    transition: 0.35s;
    cursor: pointer;

    :hover {
      scale: 1.1;
      transition: 0.35s;
    }

    img{
      max-width: 240px;
      border-radius: 8px;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    }
  }
}
`
export const infoContent = styled.div`
  max-width: 480px;

  p {
    margin-bottom: 16px;
  }
`
