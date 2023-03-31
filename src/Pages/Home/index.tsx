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
      </Container>
    </>
  )
}

export default Home
