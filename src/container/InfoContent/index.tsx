import * as S from './styles'
import SubtitleComponent from '../../components/Subtitle'
import ParagrafoComponent from '../../components/Paragrafo'
import ButtonComponent from '../../components/Button'

import FotoCarro from '../../images/carros/carro-header.png'

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
      <ButtonComponent>Produtos</ButtonComponent>
    </div>
    <S.ListContainer>
      <li>
        <img src={FotoCarro} alt="" />
        <SubtitleComponent fontSize={16}>Dana 44 eixo 1</SubtitleComponent>
      </li>
      <li>
        <img src={FotoCarro} alt="" />
        <SubtitleComponent fontSize={16}>Dana 44 eixo 1</SubtitleComponent>
      </li>
      <li>
        <img src={FotoCarro} alt="" />
        <SubtitleComponent fontSize={16}>Dana 44 eixo 1</SubtitleComponent>
      </li>
    </S.ListContainer>
  </S.InfoContainer>
)

export default InfoContent
