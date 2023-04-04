import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import FotoUm from '../../images/pecas/peca-um.jpeg'
import FotoDois from '../../images/pecas/peca-insta-dois.jpeg'
import FotoTres from '../../images/pecas/peca-insta-tres.jpeg'
import FotoQuatro from '../../images/pecas/peca-insta-quatro.jpeg'

import * as S from './styles'

const MidiasContainer = () => (
  <S.MidiaContainer>
    <TituloComponent>Nos siga no Instagram</TituloComponent>
    <S.ImageContent>
      <S.ListImages>
        <li>
          <img src={FotoUm} alt="" />
        </li>
        <li>
          <img src={FotoDois} alt="" />
        </li>
        <li>
          <img src={FotoTres} alt="" />
        </li>
        <li>
          <img src={FotoQuatro} alt="" />
        </li>
      </S.ListImages>
      <S.infoContent>
        <SubtitleComponent>@laercioEixo44</SubtitleComponent>
        <ParagrafoComponent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          consequuntur libero odio nulla modi id facere, voluptate unde ratione
          incidunt harum consectetur sunt? Eos, magnam qui. Facere non
          laudantium natus.
        </ParagrafoComponent>
        <ButtonComponent link="teste">Instagram</ButtonComponent>
      </S.infoContent>
    </S.ImageContent>
  </S.MidiaContainer>
)

export default MidiasContainer
