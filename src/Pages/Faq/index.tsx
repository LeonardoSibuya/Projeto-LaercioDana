import { useEffect, useState } from 'react'

import * as S from './styles'

import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import FaqItems, { PropsFaq } from '../../components/FaqItems'
import Subtitle from '../../components/Subtitle'
import { Container } from '../../styles'
import Whatsapp from '../../components/Whatsapp'

const Mock: PropsFaq[] = [
  {
    id: 1,
    title: 'Como comprar',
    text: 'Realizamos vendas diretamente pelo WhatsApp e estamos sempre prontos para atendê-lo. Entre em contato agora mesmo e garanta seus produtos de forma rápida e prática!',
    link: 'WhatsApp',
    externalLink:
      'https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0'
  },
  {
    id: 2,
    title: 'Como retirar',
    text: 'Oferecemos exclusivamente retirada em nossa loja física em São José dos Campos. Venha pessoalmente e confira nossos eixos Dana 44 com garantia de qualidade!'
  },
  {
    id: 3,
    title: 'Formas de pagamento',
    text: 'Facilitamos sua experiência! Aceitamos pagamentos com cartões de crédito, débito e Pix. Na hora de retirar suas peças em nossa loja em São José dos Campos, você pode escolher a opção de pagamento que mais se adequa às suas necessidades.'
  },
  {
    id: 4,
    title: 'Condição dos eixos e componentes',
    text: 'Garantimos a qualidade! Trabalhamos exclusivamente com eixos e seus componentes 100% novos e originais, proporcionando confiabilidade e desempenho excepcionais para o seu veículo..'
  },
  {
    id: 5,
    title: 'Nos siga no Instagram',
    text: 'Fique por dentro das novidades e promoções! Siga-nos no Instagram para não perder nenhum detalhe. Seja o primeiro a saber sobre nossos produtos e ofertas imperdíveis!',
    link: '@lreixos',
    externalLink: 'https://www.instagram.com/lreixos'
  }
]

const Faq = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <HeaderSecondayPages titlePage="Dúvidas" />
          <Sidebar />
          <Subtitle>Perguntas frequentes</Subtitle>
          <S.List>
            {Mock.map((item) => (
              <li key={item.id}>
                <FaqItems
                  text={item.text}
                  title={item.title}
                  link={item.link}
                  externalLink={item.externalLink}
                />
              </li>
            ))}
          </S.List>
          <Container>
            <S.Text>
              Caso ainda tenha dúvidas,
              <a
                href="https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                entre em contato agora mesmo!{' '}
              </a>
              Estamos sempre a disposição para atende-los.
            </S.Text>
          </Container>
          <Footer marginTop="160px" />
          <Whatsapp />
        </>
      )}
    </>
  )
}

export default Faq
