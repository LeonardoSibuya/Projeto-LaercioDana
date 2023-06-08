import * as S from './styles'

export type Props = {
  type: 'link' | 'page'
  to?: string
  children: string
  link?: string
}

const ButtonComponent = ({ children, link, type, to }: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink href={link} target="_blank">
        {children}
      </S.ButtonLink>
    )
  }

  return <S.ButtonPage to={to as string}>{children}</S.ButtonPage>
}

export default ButtonComponent
