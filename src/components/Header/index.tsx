import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import { open } from '../../store/reducers/asideBar'

import logo from '../../images/logo-laercio.png'

const Header = () => {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.asideBar)

  const openMenu = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <h1>
        <img src={logo} alt="LR Eixos" />
      </h1>
      <div className={isOpen ? 'is-hidden' : ''} onClick={openMenu}>
        <span />
        <span />
        <span />
      </div>
    </S.HeaderContainer>
  )
}

export default Header
