import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import { open } from '../../store/reducers/asideBar'

import logo from '../../images/logo-laercio.png'
import { Container } from '../../styles'

type Props = {
  titlePage: string
}

const HeaderSecondayPages = ({ titlePage }: Props) => {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.asideBar)

  const openMenu = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <Container>
        <div className={isOpen ? 'is-hidden' : ''} onClick={openMenu}>
          <span />
          <span />
          <span />
        </div>
        <h1>
          <S.LinkLogo to="/">
            <img src={logo} alt="LR Eixos" />
          </S.LinkLogo>
        </h1>
        <h2>{titlePage}</h2>
      </Container>
    </S.HeaderContainer>
  )
}

export default HeaderSecondayPages
