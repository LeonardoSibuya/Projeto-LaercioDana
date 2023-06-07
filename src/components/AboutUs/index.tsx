import * as S from './styles'

import { Container } from '../../styles'
import Subtitle from '../Subtitle'

import c10 from '../../images/carros/c10-lateral.jpg'

const AboutUs = () => (
  <Container>
    <S.Content>
      <Subtitle>Quem somos</Subtitle>
      <S.TextDiv>
        <p>
          <span>
            Somos revendedores de eixos diferenciais Dana, localizados em São
            José dos Campos. Oferecemos uma ampla variedade de opções para
            atender às suas necessidades automotivas. Nossa missão é fornecer os
            melhores eixos do mercado, garantindo qualidade e melhor desempenho
            para o seu veículo.
          </span>
          <span>
            Trabalhamos com os modelos de eixo 44 Convencional e Blocante, 100%
            novos e originais Dana, além de oferecer cada um de seus
            componentes. Se você busca alto desempenho, resistência, qualidade e
            segurança para o seu carro clássico, o Dana 44 é a escolha certa!
            Faça história no mundo dos carros antigos adquirindo nossos
            produtos.
          </span>
          <span>
            Além dos eixos diferenciais, também disponibilizamos uma ampla
            variedade de peças para o seu eixo. Trabalhamos com marcas
            renomadas, como Spicer, Dana, rolamentos Timken e retentores Sabó
            para eixos. Nossa equipe está pronta para ajudá-lo a encontrar as
            peças certas para o seu veículo, garantindo qualidade e segurança na
            condução.
          </span>
        </p>
        <img src={c10} alt="carro pick up vermelha" />
      </S.TextDiv>
    </S.Content>
  </Container>
)

export default AboutUs
