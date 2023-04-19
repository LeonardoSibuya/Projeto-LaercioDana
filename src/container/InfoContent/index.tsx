import * as S from './styles'
import SubtitleComponent from '../../components/Subtitle'
import ParagrafoComponent from '../../components/Paragrafo'

import pecaUm from '../../images/pecas/peca-dois-nova.png'
import pecaDois from '../../images/pecas/peca-nova.png'
import acessorio from '../../images/pecas/acessorio-novo.png'

import { ButtonProduto } from './styles'

const InfoContent = () => (
  <S.InfoContainer>
    <div>
      <SubtitleComponent>
        Aqui você encontra os melhores eixos
      </SubtitleComponent>
      <SubtitleComponent>do mercado, Convencional e Blocante</SubtitleComponent>
      <ParagrafoComponent>
        Trabalhamos com os modelos de eixo 44 Convencional e Blocante, 100%
        novos e originais Dana, e também vendemos cada um de seus componentes.
      </ParagrafoComponent>
      <ButtonProduto to="/produtos">Produtos</ButtonProduto>
    </div>
    <S.ListContainer>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Diferencial OT-Convencional</SubtitleComponent>
          <img src={pecaUm} alt="Imagem eixo diferencial" />
        </S.LinkImg>
      </li>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Diferencial TL-Blocante</SubtitleComponent>
          <img src={pecaDois} alt="Imagem eixo diferencial" />
        </S.LinkImg>
      </li>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Componentes</SubtitleComponent>
          <img src={acessorio} alt="Imagem componente" />
        </S.LinkImg>
      </li>
    </S.ListContainer>
  </S.InfoContainer>
)

export default InfoContent
