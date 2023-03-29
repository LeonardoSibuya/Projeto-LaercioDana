import Footer from './container/Footer'
import Header from './container/Header'
import InfoContent from './container/InfoContent'
import Manual from './container/Manual'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <main>
          <InfoContent />
          <Manual />
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
