import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'

import * as S from './styles'

import { Container } from '../../styles'

import Dodge from '../../images/carros/dodge.jpg'
import Opala from '../../images/carros/opala-79.jpg'
import OpalaSs from '../../images/carros/maverick.jpg'

const Footer = () => (
  <S.ContainerFooter>
    <Container>
      <S.Content>
        <S.ListCard>
          <li>
            <img src={Dodge} alt="" />
          </li>
          <li>
            <img src={OpalaSs} alt="" />
          </li>
          <li>
            <img src={Opala} alt="" />
          </li>
        </S.ListCard>
        <S.InfoContent>
          <SubtitleComponent>
            Compre agora mesmo seu eixo Dana
          </SubtitleComponent>
          <ParagrafoComponent>
            Oferecemos atendimento e vendas através do WhatsApp e do Mercado
            Livre. No entanto, por meio do Mercado Livre, as taxas da plataforma
            serão acrescidas ao valor do produto. Estamos prontos para fornecer
            a melhor solução para suas necessidades.
          </ParagrafoComponent>
          <ul>
            <li>
              <b>Parcelamos em até 10x</b>
            </li>
            <li>
              <b>Retirada a combinar</b>
            </li>
            <li>
              <b>São José dos Campos - SP</b>
            </li>
            <li>
              <b>(11) 97102-7474</b>
            </li>
          </ul>
          <S.DivButtons>
            <ButtonComponent link="https://fonts.google.com/">
              Whastapp
            </ButtonComponent>
            <ButtonComponent link="https://www.mercadolivre.com.br/perfil/LAERCIO.COM">
              Mercado Livre
            </ButtonComponent>
          </S.DivButtons>
        </S.InfoContent>
      </S.Content>
    </Container>
  </S.ContainerFooter>
)

export default Footer
