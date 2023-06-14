import { useEffect, useState } from 'react'

import * as S from './styles'

import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import FaqItems, { PropsFaq } from '../../components/FaqItems'
import Subtitle from '../../components/Subtitle'

const Mock: PropsFaq[] = [
  {
    id: 1,
    title: 'Como comprar',
    text: 'lorafoafoamfoagmog'
  },
  {
    id: 2,
    title: 'Entrega / Retirada',
    text: 'lorafoafoamfoagmog'
  },
  {
    id: 4,
    title: 'Formas de pagamento',
    text: 'lorafoafoamfoagmog'
  },
  {
    id: 5,
    title: 'Localização',
    text: 'lorafoafoamfoagmog'
  },
  {
    id: 6,
    title: 'Condição dos eixos',
    text: 'lorafoafoamfoagmog'
  },
  {
    id: 7,
    title: 'Condição dos componentes',
    text: 'lorafoafoamfoagmog'
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
                <FaqItems text={item.text} title={item.title} />
              </li>
            ))}
          </S.List>
          <S.Text>
            Caso ainda tenha dúvidas,
            <a href=""> entre em contato agora mesmo! </a>Estamos sempre a
            disposição para atende-los.
          </S.Text>
          <Footer marginTop="160px" />
        </>
      )}
    </>
  )
}

export default Faq
