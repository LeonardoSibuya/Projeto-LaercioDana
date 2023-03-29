import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'

import * as S from './styles'

import { Container } from '../../styles'

import Carros from '../../images/carros/img-footer.png'

const Footer = () => (
  <S.ContainerFooter>
    <Container>
      <S.Content>
        <img src={Carros} alt="" />
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
              <b>Potente para seu carro</b>
            </li>
            <li>
              <b>Potente para seu carro</b>
            </li>
            <li>
              <b>Potente para seu carro</b>
            </li>
            <li>
              <b>Potente para seu carro</b>
            </li>
          </ul>
          <ButtonComponent>Whastapp</ButtonComponent>
        </S.InfoContent>
      </S.Content>
    </Container>
  </S.ContainerFooter>
)

export default Footer
