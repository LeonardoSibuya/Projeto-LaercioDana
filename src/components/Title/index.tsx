import { Title } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const TituloComponent = ({ children, fontSize }: Props) => (
  <Title fontSize={fontSize}>{children}</Title>
)

export default TituloComponent
