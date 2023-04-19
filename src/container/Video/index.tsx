import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'

import * as S from './styles'

const VideoContainer = () => (
  <S.VideoContainer>
    <S.ContentText>
      <SubtitleComponent>Nossas peças no detalhe para você</SubtitleComponent>
      <ParagrafoComponent>
        Aqui você pode conferir detalhes dos eixos diferencial, incluindo os
        componentes. Com imagens em alta definição, é possível ver cada
        componente claramente e compreender como funcionam. Não perca a chance
        de conhecer melhor essas peças essenciais para o seu veículo. Confira
        agora mesmo!
      </ParagrafoComponent>
    </S.ContentText>
    <S.ContentVideo>
      <iframe
        src="https://www.youtube.com/embed/dBstoyIhAsI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </S.ContentVideo>
  </S.VideoContainer>
)

export default VideoContainer
