import ButtonComponent from '../../components/Button'
import ParagrafoComponent from '../../components/Paragrafo'
import SubtitleComponent from '../../components/Subtitle'
import TituloComponent from '../../components/Title'

import * as S from './styles'

import eixoConvecional from '../../images/pecas/eixo-convencional.png'
import eixoConvecionalUm from '../../images/pecas/eixo-tres-sf.png'
import eixoConvecionalDois from '../../images/pecas/eixo-cinco-sf.png'

import eixoBlocante from '../../images/pecas/eixo-blocante-sf.png'
import eixoBlocanteUm from '../../images/pecas/peca-um-sf.png'
import eixoBlocanteDois from '../../images/pecas/peca-dois-sf.png'

import Acessorios from '../../images/acessorios/acessorios.png'
import AcessoriosUm from '../../images/acessorios/rolamento.png'
import AcessoriosDois from '../../images/acessorios/acessorio-um-sf.png'

const ProdutosContainer = () => (
  <S.divContainer>
    <TituloComponent>Eixos Diferencial</TituloComponent>
    <S.Content>
      <div>
        <ul>
          <S.ImageGrande>
            <img src={eixoConvecional} alt="" />
          </S.ImageGrande>
          <S.ListImagePequena>
            <li>
              <img src={eixoConvecionalUm} alt="" />
            </li>
            <li>
              <img src={eixoConvecionalDois} alt="" />
            </li>
          </S.ListImagePequena>
        </ul>
      </div>
      <S.InfoContent>
        <SubtitleComponent>Eixo OT-Convencional</SubtitleComponent>
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
        <SubtitleComponent>Eixo TL-Blocante</SubtitleComponent>
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
            <img src={eixoBlocante} alt="" />
          </S.ImageGrande>
          <S.ListImagePequena>
            <li>
              <img src={eixoBlocanteUm} alt="" />
            </li>
            <li>
              <img src={eixoBlocanteDois} alt="" />
            </li>
          </S.ListImagePequena>
        </ul>
      </div>
    </S.Content>

    <TituloComponent>Acessórios</TituloComponent>
    <S.Content>
      <div>
        <ul>
          <S.ImageGrande>
            <img src={Acessorios} alt="" />
          </S.ImageGrande>
          <S.ListImagePequena>
            <li>
              <img src={AcessoriosUm} alt="" />
            </li>
            <li>
              <img src={AcessoriosDois} alt="" />
            </li>
          </S.ListImagePequena>
        </ul>
      </div>
      <S.InfoContent>
        <SubtitleComponent>
          Acessórios completos para eixo dana 44
        </SubtitleComponent>
        <ParagrafoComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          inventore ad, quaerat eaque quidem reprehenderit dolorum iusto nostrum
          illum rerum eveniet, ea, architecto nemo. Nostrum reprehenderit rerum
          deserunt minima amet.
        </ParagrafoComponent>
        <ParagrafoComponent>
          Nos chame em nosso WhatsApp para consultar disponibilidade, e valores.
        </ParagrafoComponent>
        <ButtonComponent link="https://fonts.google.com/">
          Contatar
        </ButtonComponent>
      </S.InfoContent>
    </S.Content>
  </S.divContainer>
)

export default ProdutosContainer
