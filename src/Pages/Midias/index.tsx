import HeaderAbas from '../../container/HeaderAbas'
import MidiasContainer from '../../container/Midias'
import VideoContainer from '../../container/Video'

import { Container } from '../../styles'

const Midias = () => {
  return (
    <>
      <HeaderAbas />
      <Container>
        <MidiasContainer />
        <VideoContainer />
      </Container>
    </>
  )
}

export default Midias
