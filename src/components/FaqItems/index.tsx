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
  link?: string
  externalLink?: string
  id?: number
}

const FaqItems = ({ text, title, link, externalLink }: PropsFaq) => {
  const [textVisible, setTextVisible] = useState(false)

  const handleToggleText = () => {
    setTimeout(() => {
      setTextVisible(!textVisible)
    }, 200)
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section>
      <Container>
        <S.ContainerPill data-aos="fade-right">
          <S.ContainerTitleIcon onClick={handleToggleText}>
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
            <p className={textVisible ? 'visible' : ''}>
              {text}
              <a href={externalLink} target="_blank" rel="noreferrer">
                {link}
              </a>
            </p>
          </div>
        </S.ContainerPill>
      </Container>
    </section>
  )
}

export default FaqItems
