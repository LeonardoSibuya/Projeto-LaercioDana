import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import buttonMenu from '../../images/icons/menu.png'

import { open } from '../../store/reducers/asideBar'

const Header = () => {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.asideBar)

  const openMenu = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <h1>LR EIXOS</h1>
      <span className={isOpen ? 'is-hidden' : ''}>
        <img src={buttonMenu} alt="botão do menu" onClick={openMenu} />
      </span>
    </S.HeaderContainer>
  )
}

export default Header
