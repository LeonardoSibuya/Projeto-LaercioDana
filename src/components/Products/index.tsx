import * as S from './styles'

import ButtonComponent from '../Button'
import Subtitle from '../Subtitle'
import { Container } from '../../styles'

export type PropsProducts = {
  title: string
  imageOne: string
  imageTwo: string
  imageThree: string
  description: string
  externalLink: string
  pageLink: string
  price?: string
  oldPrice?: string
  dataAos: string
  id: number
}

const ProductsItem = ({
  description,
  externalLink,
  id,
  imageOne,
  imageTwo,
  imageThree,
  pageLink,
  oldPrice,
  price,
  dataAos,
  title
}: PropsProducts) => {
  return (
    <Container>
      <S.SectionProduct>
        <S.ContainerImg>
          <div className="two-images">
            <img src={imageOne} alt="" data-aos={dataAos} />
            <img src={imageTwo} alt="" data-aos={dataAos} />
          </div>
          <div>
            <img src={imageThree} alt="" data-aos={dataAos} />
          </div>
        </S.ContainerImg>
        <S.ContainerText>
          <Subtitle>{title}</Subtitle>
          <p>{description}</p>
          <span className="old-price">{oldPrice}</span>
          <span data-aos={dataAos}>{price}</span>
          <S.ContainerButton>
            <ButtonComponent type="page" to={pageLink}>
              Saiba Mais
            </ButtonComponent>
            <ButtonComponent type="link" link={externalLink}>
              Comprar
            </ButtonComponent>
          </S.ContainerButton>
        </S.ContainerText>
      </S.SectionProduct>
    </Container>
  )
}

export default ProductsItem
