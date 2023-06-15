import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import * as S from './styles'

import { Container } from '../../styles'

import open from '../../images/icons/plus.png'
import close from '../../images/icons/closeFaq.png'

export type PropsFaq = {
  title: string
  text: string
  id?: number
}

const FaqItems = ({ text, title }: PropsFaq) => {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section>
      <Container>
        <S.ContainerPill data-aos="fade-right">
          <S.ContainerTitleIcon onClick={() => setTextVisible(!textVisible)}>
            <h4>{title}</h4>
            <span>
              {textVisible ? (
                <img src={close} alt="icone de fechar" />
              ) : (
                <img src={open} alt="icone de abrir" />
              )}
            </span>
          </S.ContainerTitleIcon>
          <div>
            <p className={textVisible ? 'visible' : ''}>{text}</p>
          </div>
        </S.ContainerPill>
      </Container>
    </section>
  )
}

export default FaqItems
