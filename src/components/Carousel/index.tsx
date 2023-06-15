import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'

import * as S from './styles'

import carouselOne from '../../images/pecas/peca-nova.png'
import carouselTwo from '../../images/pecas/eixo-tres.png'
import carouselThree from '../../images/carros/opala-editado.jpg'
import carouselFour from '../../images/pecas/eixo-home-dois.png'
import carouselFive from '../../images/pecas/acessorio-novo.png'
import carouselSix from '../../images/pecas/eixo-cinco.png'

const images = [
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive,
  carouselSix
]

const Carousel = () => {
  const carousel = React.useRef(HTMLElement.arguments)
  const [widthCarousel, setWidthCarousel] = useState(0)

  useEffect(() => {
    setWidthCarousel(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    )
  }, [])

  return (
    <S.CarouselContainer>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: widthCarousel, left: -widthCarousel }}
          initial={{ x: 0 }}
          animate={{ x: 170 }}
          transition={{ duration: 1 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="fotos de peças automotivas" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </S.CarouselContainer>
  )
}

export default Carousel
