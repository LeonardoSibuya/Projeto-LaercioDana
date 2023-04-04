import HeaderAbas from '../../container/HeaderAbas'
import ProdutosContainer from '../../container/Produtos'

import { Container } from '../../styles'

const Produtos = () => {
  return (
    <>
      <HeaderAbas />
      <Container>
        <ProdutosContainer />
      </Container>
    </>
  )
}

export default Produtos
