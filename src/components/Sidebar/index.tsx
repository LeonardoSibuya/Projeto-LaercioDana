import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/asideBar'

import closeIcon from '../../images/icons/icon-close-menu.png'
import homeIcon from '../../images/icons/home.png'
import cart from '../../images/icons/add.png'
import info from '../../images/icons/information.png'
import faq from '../../images/icons/faq.png'

const Sidebar = () => {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.asideBar)

  const closeAside = () => {
    dispatch(close())
  }

  return (
    <S.ContentDiv className={isOpen ? 'is-visible' : ''}>
      <S.Overlay onClick={closeAside} />
      <S.SideBarContainer>
        <S.ContainerTitle>
          <h2>LR EIXOS</h2>
          <span>
            <img src={closeIcon} alt="Botão fechar menu" onClick={closeAside} />
          </span>
        </S.ContainerTitle>
        <ul>
          <li>
            <a href="#">
              <img src={homeIcon} alt="" />
              Pagina Inicial
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cart} alt="" />
              Produtos
            </a>
          </li>
          <li>
            <a href="#">
              <img src={info} alt="" />
              Especificações
            </a>
          </li>
          <li>
            <a href="#">
              <img src={faq} alt="" />
              Dúvidas
            </a>
          </li>
        </ul>
        <S.ContactContainer>
          <a href="#">(11) 99999-9999</a>
          <a href="#">laerciodana@outlook.com</a>
        </S.ContactContainer>
      </S.SideBarContainer>
    </S.ContentDiv>
  )
}

export default Sidebar