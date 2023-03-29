import { Paragrafo } from './styles'

type Props = {
  children: string
}

const ParagrafoComponent = ({ children }: Props) => (
  <Paragrafo>{children}</Paragrafo>
)

export default ParagrafoComponent
