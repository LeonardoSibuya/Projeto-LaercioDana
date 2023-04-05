import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin-bottom: 160px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 80px;
  }
`

export const ContentText = styled.div`
  max-width: 480px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
  }
`
export const ContentVideo = styled.div`
  iframe {
    width: 480px;
    height: 320px;
    border-radius: 8px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    border: none;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`
