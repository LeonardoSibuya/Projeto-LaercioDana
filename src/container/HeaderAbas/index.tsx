import LinkComponentHome from '../../components/LinkHome'

import * as S from './styles'

import { Container } from '../../styles'

const HeaderAbas = () => {
  return (
    <S.Header>
      <Container>
        <S.Nav>
          <h1>LR-eixos44</h1>
          <ul>
            <li>
              <LinkComponentHome aba="/">Início</LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/produtos">Produtos</LinkComponentHome>
            </li>
            <li>
              <LinkComponentHome aba="/Midias">Mídias</LinkComponentHome>
            </li>
          </ul>
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default HeaderAbas
