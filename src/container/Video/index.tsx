import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'

import * as S from './styles'

const VideoContainer = () => (
  <S.VideoContainer>
    <S.ContentText>
      <SubtitleComponent>Nossas restaurações</SubtitleComponent>
      <ParagrafoComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        placeat, eos voluptatibus saepe velit eveniet consectetur, vero, et
        quibusdam similique voluptas quia laudantium provident? Neque harum
        autem iste! Pariatur, veritatis.
      </ParagrafoComponent>
    </S.ContentText>
    <S.ContentVideo>
      <iframe
        src="https://www.youtube.com/embed/QDpaipOAZlY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </S.ContentVideo>
  </S.VideoContainer>
)

export default VideoContainer
