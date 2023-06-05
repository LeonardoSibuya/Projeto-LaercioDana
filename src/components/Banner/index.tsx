import * as S from './styles'

import { Container } from '../../styles'
import ButtonComponent from '../Button'
import Header from '../../components/Header'

import instagramIcon from '../../images/icons/Instagram-icon.png'
import whatsappIcon from '../../images/icons/wpp-icon.png'
import outlookIcon from '../../images/icons/outlook-icon.png'

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
            <ButtonComponent link="/">Entrar em contato</ButtonComponent>
          </S.Content>
          <S.ListIcons>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="icone Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={whatsappIcon} alt="icone Whatsapp" />
              </a>
            </li>
            <li>
              <a href="#">
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
