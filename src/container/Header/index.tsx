import TituloComponent from '../../components/Title'
import ParagrafoComponent from '../../components/Paragrafo'
import ButtonComponent from '../../components/Button'

import LinkComponentHome from '../../components/LinkHome'

import Maverick from '../../images/carros/maverick-sf.png'

import * as S from './styles'
import { Container } from '../../styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Nav>
          <h1>LR-eixos44</h1>
          <ul>
            <li>
              <LinkComponentHome exact aba="/" activeClassName="active">
                Início
              </LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/produtos" activeClassName="active">
                Produtos
              </LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/Midias" activeClassName="active">
                Mídias
              </LinkComponentHome>
            </li>
          </ul>
        </S.Nav>
        <S.ContentContainer>
          <S.ContentText>
            <TituloComponent>Somos especializados</TituloComponent>
            <TituloComponent>em eixos Dana</TituloComponent>
            <ParagrafoComponent>
              Vendemos eixos diferencial e seus componentes, trabalhamos com
              Spicer, Dana, rolamentos Tinken e retentores sabó para eixos.
            </ParagrafoComponent>
            <ButtonComponent link={'https://fonts.google.com/'}>
              Contato
            </ButtonComponent>
          </S.ContentText>
          <div>
            <img src={Maverick} alt="" />
          </div>
        </S.ContentContainer>
      </Container>
    </S.Header>
  )
}

export default Header
