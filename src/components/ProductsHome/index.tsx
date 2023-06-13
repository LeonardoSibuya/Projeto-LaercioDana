import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import * as S from './styles'

import Subtitle from '../Subtitle'

import eixoBlocante from '../../images/pecas/eixo-home-um.png'
import eixoConvencional from '../../images/pecas/eixo-home-dois.png'
import acessorio from '../../images/acessorios/rolamento-ia.jpg'

import ButtonComponent from '../Button'
import { Container } from '../../styles'

const ProductsHome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <Container>
      <S.DivTitle>
        <Subtitle>Eixos e componentes disponíveis agora!</Subtitle>
        <ButtonComponent type="page" to="/produtos">
          Conferir
        </ButtonComponent>
      </S.DivTitle>
      <S.ContentList>
        <li data-aos="zoom-in-up">
          <S.LinkItems to="/produtos">
            <S.TextImg>TL Blocante</S.TextImg>
            <img src={eixoBlocante} alt="Peça de carro eixo blocante" />
            <span>Compre agora</span>
          </S.LinkItems>
        </li>
        <li data-aos="zoom-in-up">
          <S.LinkItems to="/produtos">
            <S.TextImg>OT Convencional</S.TextImg>
            <img src={eixoConvencional} alt="Peça de carro eixo blocante" />
            <span>Compre agora</span>
          </S.LinkItems>
        </li>
        <li data-aos="zoom-in-up">
          <S.LinkItems to="/produtos">
            <S.TextImg>Componentes</S.TextImg>
            <img src={acessorio} alt="Peça de carro eixo blocante" />
            <span>Compre agora</span>
          </S.LinkItems>
        </li>
      </S.ContentList>
    </Container>
  )
}

export default ProductsHome
