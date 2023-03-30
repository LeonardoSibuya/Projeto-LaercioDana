import { Button } from './styles'

export type Props = {
  children: string
  link: string
}

const ButtonComponent = ({ children, link }: Props) => (
  <Button href={link} target="_blank">
    {children}
  </Button>
)

export default ButtonComponent
