import * as S from './styles'

import { Container } from '../../styles'

import logo from '../../images/logo-laercio.png'
import instagram from '../../images/icons/instagram.png'
import whatsapp from '../../images/icons/whatsapp.png'
import outlook from '../../images/icons/outlook.png'

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

type Props = {
  marginTop: string
}

const Footer = ({ marginTop }: Props) => (
  <S.Footer marginTop={marginTop}>
    <Container>
      <S.Content>
        <img src={logo} alt="LR EIXOS" />
        <S.ListLinks>
          <h4>Acesse</h4>
          <li>
            <S.LinkItems to="/">Início</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="/produtos">Produtos</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="/manual">Manual</S.LinkItems>
          </li>
          <li>
            <S.LinkItems to="/duvidas">Dúvidas</S.LinkItems>
          </li>
        </S.ListLinks>
        <S.ListSocials>
          <li>
            <a
              href="https://www.instagram.com/lreixos"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="logo instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="logo whatsapp" />
            </a>
          </li>
          <li>
            <a href="mailto:lreixos@outlook.com.br">
              <img src={outlook} alt="logo outlook" />
            </a>
          </li>
        </S.ListSocials>
      </S.Content>
    </Container>
    <p> &copy; LR Eixos - Todos os direitos reservados - {currentYear}</p>
  </S.Footer>
)

export default Footer
