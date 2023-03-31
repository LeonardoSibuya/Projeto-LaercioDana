import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: start;
  justify-content: space-between;
`

export const ContentText = styled.div`
  max-width: 480px;
`
export const ContentVideo = styled.div`
  iframe {
    width: 480px;
    height: 320px;
    border-radius: 8px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    border: none;
  }
`
