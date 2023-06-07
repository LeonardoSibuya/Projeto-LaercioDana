import { ScaleLoader } from 'react-spinners'

import { Colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <ScaleLoader color={Colors.white} />
  </Container>
)

export default Loader
