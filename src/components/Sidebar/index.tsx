import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'

import * as S from './styles'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/asideBar'

import closeIcon from '../../images/icons/icon-close-menu.png'
import homeIcon from '../../images/icons/home.png'
import cart from '../../images/icons/add.png'
import info from '../../images/icons/information.png'
import faq from '../../images/icons/faq.png'
import logo from '../../images/logo-laercio.png'
import { useEffect } from 'react'

const Sidebar = () => {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.asideBar)

  const closeAside = () => {
    dispatch(close())
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [isOpen])

  useEffect(() => {
    dispatch(close())
  }, [dispatch])

  return (
    <S.ContentDiv className={isOpen ? 'is-visible' : ''} data-aos="fade-right">
      <S.Overlay onClick={closeAside} />
      <S.SideBarContainer>
        <S.ContainerTitle>
          <img src={logo} alt="LR Eixos" />
          <span>
            <img src={closeIcon} alt="Botão fechar menu" onClick={closeAside} />
          </span>
        </S.ContainerTitle>
        <ul>
          <li>
            <S.LinkItem to="/">
              <img src={homeIcon} alt="icone de home page" />
              Pagina Inicial
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem to="/produtos">
              <img src={cart} alt="icone de carrinho de compras" />
              Produtos
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem to="/manual">
              <img src={info} alt="icone de informação" />
              Manual
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem to="/duvidas">
              <img src={faq} alt="icone de interrogação" />
              Dúvidas
            </S.LinkItem>
          </li>
        </ul>
        <S.ContactContainer>
          <a href="#">(11) 99999-9999</a>
          <a href="mailto:lreixos@outlook.com.br">lreixos@outlook.com.br</a>
        </S.ContactContainer>
      </S.SideBarContainer>
    </S.ContentDiv>
  )
}

export default Sidebar
