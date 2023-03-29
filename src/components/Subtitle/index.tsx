import { Subtitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const SubtitleComponent = ({ children, fontSize }: Props) => (
  <Subtitle fontSize={fontSize}>{children}</Subtitle>
)

export default SubtitleComponent
