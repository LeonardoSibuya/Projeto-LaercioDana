import { SubtitleStyle } from './styles'

type Props = {
  children: string
}

const Subtitle = ({ children }: Props) => (
  <SubtitleStyle>{children}</SubtitleStyle>
)

export default Subtitle
