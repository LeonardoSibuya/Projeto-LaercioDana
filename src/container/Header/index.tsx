import TituloComponent from '../../components/Title'
import ParagrafoComponent from '../../components/Paragrafo'
import ButtonComponent from '../../components/Button'

import LinkComponentHome from '../../components/LinkHome'

import ImageOpala from '../../images/carros/opala-ss.png'

import * as S from './styles'
import { Container } from '../../styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Nav>
          <h1>LaercioDana</h1>
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
            <TituloComponent>em eixos Dana 44</TituloComponent>
            <ParagrafoComponent>
              Lorem ipsum dolor sit met consectetur adipisicing elit. Obcaecati
              dignissimos ad, dolorem eum nemo quos non. Optio, minus nulla
              quidem
            </ParagrafoComponent>
            <ButtonComponent link={'https://fonts.google.com/'}>
              Contato
            </ButtonComponent>
          </S.ContentText>
          <div>
            <img src={ImageOpala} alt="" />
          </div>
        </S.ContentContainer>
      </Container>
    </S.Header>
  )
}

export default Header
