import { Button } from './styles'

export type Props = {
  children: string
}

const ButtonComponent = ({ children }: Props) => <Button>{children}</Button>

export default ButtonComponent
