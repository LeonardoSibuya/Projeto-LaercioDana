import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import FotoUm from '../../images/pecas/peca-dois-nova.png'
import FotoDois from '../../images/pecas/peca-insta-tres-nova.png'
import FotoTres from '../../images/pecas/peca-insta-dois-nova.png'
import FotoQuatro from '../../images/pecas/peca-insta-quatro-nova.png'

import * as S from './styles'

const MidiasContainer = () => (
  <S.MidiaContainer>
    <TituloComponent>Nos siga no Instagram</TituloComponent>
    <S.ImageContent>
      <S.ListImages>
        <li>
          <img src={FotoUm} alt="imagem eixo diferencial" />
        </li>
        <li>
          <img src={FotoDois} alt="imagem eixo diferencial" />
        </li>
        <li>
          <img src={FotoTres} alt="imagem eixo diferencial" />
        </li>
        <li>
          <img src={FotoQuatro} alt="imagem eixo diferencial" />
        </li>
      </S.ListImages>
      <S.infoContent>
        <SubtitleComponent>@lr44dana</SubtitleComponent>
        <ParagrafoComponent>
          Se você está em busca de um eixo diferencial Dana para equipar o seu
          veículo, então precisa seguir o nosso perfil no Instagram! Lá, você
          encontrará diversas opções de eixos, com garantia de qualidade. Não
          perca a oportunidade de adquirir os melhores eixos do mercado e
          melhorar o desempenho do seu carro. Siga-nos agora mesmo e entre em
          contato.
        </ParagrafoComponent>
        <ButtonComponent link="https://www.instagram.com/lr44dana/">
          Instagram
        </ButtonComponent>
      </S.infoContent>
    </S.ImageContent>
  </S.MidiaContainer>
)

export default MidiasContainer
