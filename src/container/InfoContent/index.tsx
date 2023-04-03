import * as S from './styles'
import SubtitleComponent from '../../components/Subtitle'
import ParagrafoComponent from '../../components/Paragrafo'

import imgTeste from '../../images/pecas/pecadana.png'

import acessorios from '../../images/acessorios/acessorios.png'

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
        <SubtitleComponent fontSize={16}>
          Diferencial OT-Convencional
        </SubtitleComponent>
        <img src={imgTeste} alt="" />
      </li>
      <li>
        <SubtitleComponent fontSize={16}>
          Diferencial TL-Blocante
        </SubtitleComponent>
        <img src={imgTeste} alt="" />
      </li>
      <li>
        <SubtitleComponent fontSize={16}>Acessórios</SubtitleComponent>
        <img src={acessorios} alt="" />
      </li>
    </S.ListContainer>
  </S.InfoContainer>
)

export default InfoContent
