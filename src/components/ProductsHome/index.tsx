import * as S from './styles'

import Subtitle from '../Subtitle'

import eixoBlocante from '../../images/pecas/eixo-home-um.png'
import eixoConvencional from '../../images/pecas/eixo-home-dois.png'
import acessorio from '../../images/acessorios/spicer-rolamento.jpeg'

import ButtonComponent from '../Button'
import { Container } from '../../styles'

const ProductsHome = () => {
  return (
    <Container>
      <S.DivTitle>
        <Subtitle>Eixos e componentes disponíveis agora!</Subtitle>
        <ButtonComponent link="/">Conferir</ButtonComponent>
      </S.DivTitle>
      <S.Content>
        <div>
          <h4>Eixo TL - Blocante</h4>
          <img src={eixoBlocante} alt="Peça de carro eixo blocante" />
        </div>
        <div>
          <h4>Eixo OT - Convencional</h4>
          <img src={eixoConvencional} alt="Peça de carro eixo blocante" />
        </div>
        <div>
          <h4>Componentes</h4>
          <img src={acessorio} alt="Peça de carro eixo blocante" />
        </div>
      </S.Content>
    </Container>
  )
}

export default ProductsHome
