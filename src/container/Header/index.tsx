import TituloComponent from '../../components/Title'
import ParagrafoComponent from '../../components/Paragrafo'
import ButtonComponent from '../../components/Button'
import LinkComponent from '../../components/Links'

import * as S from './styles'
import { Container } from '../../styles'

const Header = () => (
  <S.Header>
    <Container>
      <S.Nav>
        <h1>LaercioDana</h1>
        <ul>
          <li>
            <LinkComponent>Início</LinkComponent>
          </li>
          <li>
            <LinkComponent>Produtos</LinkComponent>
          </li>
          <li>
            <LinkComponent>Informações</LinkComponent>
          </li>
        </ul>
      </S.Nav>
      <div>
        <S.ContentText>
          <TituloComponent>Somos especializados</TituloComponent>
          <TituloComponent>em eixos Dana 44</TituloComponent>
          <ParagrafoComponent>
            Lorem ipsum dolor sit met consectetur adipisicing elit. Obcaecati
            dignissimos ad, dolorem eum nemo quos non. Optio, minus nulla quidem
          </ParagrafoComponent>
          <ButtonComponent>Contato</ButtonComponent>
        </S.ContentText>
      </div>
    </Container>
  </S.Header>
)
export default Header
