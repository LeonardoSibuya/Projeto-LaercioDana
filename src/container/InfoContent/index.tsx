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
        Aqui você encontra eixos de qualidade
      </SubtitleComponent>
      <SubtitleComponent>e acessórios completos</SubtitleComponent>
      <ParagrafoComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        molestiae aut quam nobis blanditiis? Dignissimos facere aut dicta nobis
        ipsa iste neque. Eveniet deleniti, illo neque id quisquam recusandae
        quod?
      </ParagrafoComponent>
      <ButtonProduto to="/produtos">Produtos</ButtonProduto>
    </div>
    <S.ListContainer>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Diferencial OT-Convencional</SubtitleComponent>
          <img src={pecaUm} alt="" />
        </S.LinkImg>
      </li>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Diferencial TL-Blocante</SubtitleComponent>
          <img src={pecaDois} alt="" />
        </S.LinkImg>
      </li>
      <li>
        <S.LinkImg to="/produtos">
          <SubtitleComponent>Acessórios</SubtitleComponent>
          <img src={acessorio} alt="" />
        </S.LinkImg>
      </li>
    </S.ListContainer>
  </S.InfoContainer>
)

export default InfoContent
