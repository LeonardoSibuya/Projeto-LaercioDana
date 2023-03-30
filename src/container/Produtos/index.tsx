import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import * as S from './styles'

import imgTeste from '../../images/pecas/pecadana.png'

const ProdutosContainer = () => (
  <S.divContainer>
    <TituloComponent>Nossos eixos</TituloComponent>
    <S.Content>
      <div>
        <ul>
          <S.ImageGrande>
            <img src={imgTeste} alt="" />
          </S.ImageGrande>
          <S.ListImagePequena>
            <li>
              <img src={imgTeste} alt="" />
            </li>
            <li>
              <img src={imgTeste} alt="" />
            </li>
          </S.ListImagePequena>
        </ul>
      </div>
      <S.InfoContent>
        <SubtitleComponent>Eixo dana 44 tipo 1</SubtitleComponent>
        <ParagrafoComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          inventore ad, quaerat eaque quidem reprehenderit dolorum iusto nostrum
          illum rerum eveniet, ea, architecto nemo. Nostrum reprehenderit rerum
          deserunt minima amet.
        </ParagrafoComponent>
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
        <S.Preco>R$ 1000,00</S.Preco>
        <S.Parcela>em até 10x</S.Parcela>
        <ButtonComponent link="https://fonts.google.com/">
          Comprar
        </ButtonComponent>
      </S.InfoContent>
    </S.Content>

    <S.Content>
      <S.InfoContent>
        <SubtitleComponent>Eixo dana 44 tipo 2</SubtitleComponent>
        <ParagrafoComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          inventore ad, quaerat eaque quidem reprehenderit dolorum iusto nostrum
          illum rerum eveniet, ea, architecto nemo. Nostrum reprehenderit rerum
          deserunt minima amet.
        </ParagrafoComponent>
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
        <S.Preco>R$ 1000,00</S.Preco>
        <S.Parcela>em até 10x</S.Parcela>
        <ButtonComponent link="https://fonts.google.com/">
          Comprar
        </ButtonComponent>
      </S.InfoContent>
      <div>
        <ul>
          <S.ImageGrande>
            <img src={imgTeste} alt="" />
          </S.ImageGrande>
          <S.ListImagePequena>
            <li>
              <img src={imgTeste} alt="" />
            </li>
            <li>
              <img src={imgTeste} alt="" />
            </li>
          </S.ListImagePequena>
        </ul>
      </div>
    </S.Content>
  </S.divContainer>
)

export default ProdutosContainer
