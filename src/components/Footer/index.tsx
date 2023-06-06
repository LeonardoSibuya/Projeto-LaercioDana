import * as S from './styles'

import { Container } from '../../styles'

import logo from '../../images/logo-laercio.png'
import instagram from '../../images/icons/Instagram.png'
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
            <a href="">Página inicial</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Informações técnicas</a>
          </li>
          <li>
            <a href="">Dúvidas</a>
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
