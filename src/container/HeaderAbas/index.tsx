import LinkComponentHome from '../../components/LinkHome'

import * as S from './styles'

import { Container } from '../../styles'

const HeaderAbas = () => {
  return (
    <S.Header>
      <Container>
        <S.Nav>
          <h1>LaercioDana</h1>
          <ul>
            <li>
              <LinkComponentHome aba="/">Início</LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/produtos">Produtos</LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/Midias">Informações</LinkComponentHome>
            </li>
          </ul>
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default HeaderAbas
