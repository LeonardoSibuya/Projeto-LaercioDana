import styled from 'styled-components'

export const MidiaContainer = styled.div`
  padding-top: 160px;

  @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 80px;
  }

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

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 80px;
  }
`
export const ListImages = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }

  :hover > :not(:hover) {
    filter: blur(3px);

    @media (max-width: 768px) {
      filter: none;
    }
  }

  li{
    transition: 0.35s;
    cursor: pointer;
    width: 240px;
    height: 240px;

    @media (max-width: 1024px) {
      width: 100%;
      max-height: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 160px;
    }

    :hover {
      scale: 1.1;
      transition: 0.35s;
    }

    img{
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    }
  }
}
`
export const infoContent = styled.div`
  max-width: 480px;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  p {
    margin-bottom: 16px;
  }
`
