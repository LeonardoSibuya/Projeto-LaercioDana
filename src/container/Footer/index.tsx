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
            Compre agora mesmo seu eixo Dana 44
          </SubtitleComponent>
          <ParagrafoComponent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            perferendis itaque quod delectus ipsa voluptate. Impedit quia
            tenetur eligendi, eius veritatis cumque minima perspiciatis.
            Laboriosam eius dolores natus obcaecati consequuntur.
          </ParagrafoComponent>
          <ul>
            <li>
              <b>Parcelamos em até 10x</b>
            </li>
            <li>
              <b>Parcelamos em até 10x</b>
            </li>
            <li>
              <b>Parcelamos em até 10x</b>
            </li>
            <li>
              <b>Parcelamos em até 10x</b>
            </li>
          </ul>
          <S.DivButtons>
            <ButtonComponent link="https://fonts.google.com/">
              Whastapp
            </ButtonComponent>
            <ButtonComponent link="https://fonts.google.com/">
              Mercado Livre
            </ButtonComponent>
          </S.DivButtons>
        </S.InfoContent>
      </S.Content>
    </Container>
  </S.ContainerFooter>
)

export default Footer
