import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import * as S from './styles'

import imgTeste from '../../images/pecas/pecadana.png'

const Acessorios = () => (
  <S.Content>
    <TituloComponent>Nossos acessórios</TituloComponent>
    <ul>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={imgTeste} alt="" />
          <SubtitleComponent>Acessorio Tal</SubtitleComponent>
          <h4>R$ 1000,00</h4>
        </a>
      </li>
    </ul>
  </S.Content>
)

export default Acessorios
