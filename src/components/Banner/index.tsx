import * as S from './styles'

import { Container } from '../../styles'
import ButtonComponent from '../Button'
import Header from '../../components/Header'

import instagramIcon from '../../images/icons/instagram.png'
import whatsappIcon from '../../images/icons/whatsapp.png'
import outlookIcon from '../../images/icons/outlook.png'

const Banner = () => {
  return (
    <>
      <S.BannerContent>
        <Container>
          <Header />
          <S.Content>
            <h2>Somos especializados em eixos Dana 44</h2>
            <p>
              Trabalhamos com os melhores eixos Dana 44 do mercado, Spicer,
              Dana, rolamentos Tinken e retentores sabó para eixos. <br />
              Vendemos também seus componentes separadamente.
            </p>
            <ButtonComponent link="/" type={'link'}>
              Entrar em contato
            </ButtonComponent>
          </S.Content>
          <S.ListIcons>
            <li>
              <a
                href="https://www.instagram.com/lreixos"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="icone Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsappIcon} alt="icone Whatsapp" />
              </a>
            </li>
            <li>
              <a href="mailto:lreixos@outlook.com.br">
                <img src={outlookIcon} alt="icone Outlook" />
              </a>
            </li>
          </S.ListIcons>
        </Container>
        <div className="overlay"></div>
      </S.BannerContent>
    </>
  )
}

export default Banner
