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
          Se você busca alto desempenho, resistência, qualidade e segurança para
          seu carro clássico, o Dana 44 é a escolha certa! Compre agora mesmo e
          faça história no mundo dos carros antigos!
        </ParagrafoComponent>
        <S.ListInfo>
          <li>100% Original</li>
          <li>Classico</li>
          <li>Resistência</li>
          <li>Segurança</li>
        </S.ListInfo>
        <S.Preco>R$ 9.200,00</S.Preco>
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
          Se você possui um carro clássico e deseja melhorar a aderência e a
          estabilidade em curvas, o diferencial blocante é o componente ideal. O
          blocante permite que as rodas traseiras girem juntas, distribuindo a
          potência de forma mais uniforme e evitando que uma roda escorregue
          enquanto a outra permanece parada. Compre agora mesmo seu diferencial
          blocante e transforme seu carro clássico em uma máquina de alta
          performance!
        </ParagrafoComponent>
        <S.ListInfo>
          <li>Tração melhorada</li>
          <li>Estabilidade em curvas</li>
          <li>Rodas acopladas</li>
          <li>Potência uniforme</li>
        </S.ListInfo>
        <S.Preco>R$ 12.400,00</S.Preco>
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

    <TituloComponent>Componentes</TituloComponent>
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
          Todos os componentes para seu eixo diferencial
        </SubtitleComponent>
        <ParagrafoComponent>
          Oferecemos uma ampla variedade de peças para o seu eixo diferencial.
          Entre em contato conosco agora mesmo para consultar a disponibilidade
          e os melhores preços das peças que você precisa. Estamos prontos para
          ajudá-lo a encontrar as peças certas para o seu veículo e garantir a
          máxima qualidade e segurança em sua condução.
        </ParagrafoComponent>
        <ButtonComponent link="https://fonts.google.com/">
          Contatar
        </ButtonComponent>
      </S.InfoContent>
    </S.Content>
  </S.divContainer>
)

export default ProdutosContainer
