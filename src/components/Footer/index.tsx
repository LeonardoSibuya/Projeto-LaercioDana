import * as S from './styles'

import { Container } from '../../styles'

import logo from '../../images/logo-laercio.png'
import instagram from '../../images/icons/instagram.png'
import whatsapp from '../../images/icons/whatsapp.png'
import outlook from '../../images/icons/outlook.png'

const Footer = () => (
  <S.Footer>
    <Container>
      <S.Content>
        <img src={logo} alt="LR EIXOS" />
        <S.ListLinks>
          <h4>Acesse</h4>
          <li>
            <S.LinkItems to="/">Página inicial</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="/produtos">Produtos</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="">Informações técnicas</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="">Dúvidas</S.LinkItems>
          </li>
        </S.ListLinks>
        <S.ListSocials>
          <li>
            <a href="">
              <img src={instagram} alt="logo instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={whatsapp} alt="logo whatsapp" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={outlook} alt="logo outlook" />
            </a>
          </li>
        </S.ListSocials>
      </S.Content>
    </Container>
    <p>LR eixos - 2023 - Todos os direitos reservados</p>
  </S.Footer>
)

export default Footer
