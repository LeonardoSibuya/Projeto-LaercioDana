import { LinkStyleHome } from './styles'

export type Props = {
  children: string
  aba: string
  exact?: boolean
  activeClassName?: string
}

const LinkComponentHome = ({
  children,
  aba,
  exact,
  activeClassName
}: Props) => (
  <LinkStyleHome to={aba} exact={exact} activeClassName={activeClassName}>
    {children}
  </LinkStyleHome>
)

export default LinkComponentHome
