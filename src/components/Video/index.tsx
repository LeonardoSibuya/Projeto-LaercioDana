import * as S from './styles'

import { Container } from '../../styles'
import Subtitle from '../Subtitle'

const Video = () => (
  <Container>
    <S.ContainerVideo>
      <Subtitle>Confira os eixos em destaque</Subtitle>
      <iframe
        src="https://www.youtube.com/embed/dBstoyIhAsI"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </S.ContainerVideo>
  </Container>
)

export default Video
