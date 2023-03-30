import Acessorios from '../../container/Acessorios'
import HeaderAbas from '../../container/HeaderAbas'
import ProdutosContainer from '../../container/Produtos'

import { Container } from '../../styles'

const Midias = () => {
  return (
    <>
      <HeaderAbas />
      <Container>
        <ProdutosContainer />
        <Acessorios />
      </Container>
    </>
  )
}

export default Midias
