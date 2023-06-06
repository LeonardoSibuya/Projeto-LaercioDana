import * as S from './styles'

import { Container } from '../../styles'
import Subtitle from '../Subtitle'

const Video = () => (
  <Container>
    <S.ContainerVideo>
      <Subtitle>Confira os eixos em destaque</Subtitle>
      <S.Content>
        <iframe
          src="https://www.youtube.com/embed/dBstoyIhAsI"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>
          Se você está em busca de um eixo diferencial Dana para equipar o seu
          veículo, aqui você encontrará diversas opções de eixos, com garantia
          de qualidade. Não perca a oportunidade de adquirir os melhores eixos
          do mercado e melhorar o desempenho do seu carro.
        </p>
      </S.Content>
    </S.ContainerVideo>
  </Container>
)

export default Video
