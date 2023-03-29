import { Link } from './styles'

export type Props = {
  children: string
}

const LinkComponent = ({ children }: Props) => <Link>{children}</Link>

export default LinkComponent
