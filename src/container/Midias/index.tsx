import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import Acessorio from '../../images/acessorios/acessorio-home.jpg'

import * as S from './styles'

const MidiasContainer = () => (
  <S.MidiaContainer>
    <TituloComponent>Nos siga no Instagram</TituloComponent>
    <S.ImageContent>
      <S.ListImages>
        <li>
          <img src={Acessorio} alt="" />
        </li>
        <li>
          <img src={Acessorio} alt="" />
        </li>
        <li>
          <img src={Acessorio} alt="" />
        </li>
        <li>
          <img src={Acessorio} alt="" />
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
