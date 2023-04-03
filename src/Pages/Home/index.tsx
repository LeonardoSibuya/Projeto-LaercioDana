import Caracteristicas from '../../container/Caracteristicas'
import Header from '../../container/Header'
import InfoContent from '../../container/InfoContent'
import Manual from '../../container/Manual'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <InfoContent />
        <Manual />
        <Caracteristicas />
      </Container>
    </>
  )
}

export default Home
