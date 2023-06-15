import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import * as S from './styles'

import carouselOne from '../../images/pecas/peca-nova.png'
import carouselTwo from '../../images/pecas/eixo-cinco.png'
import carouselThree from '../../images/carros/opala-editado.jpg'
import carouselFour from '../../images/pecas/eixo-home-dois.png'
import carouselFive from '../../images/pecas/acessorio-novo.png'

const images = [
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive
]

const Carousel = () => {
  const carousel = useRef<HTMLDivElement | null>(null)

  const [widthCarousel, setWidthCarousel] = useState(0)

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carousel.current) {
        const width = carousel.current.offsetWidth
        setWidthCarousel(width)
      }
    }

    updateCarouselWidth()

    window.addEventListener('resize', updateCarouselWidth)

    return () => {
      window.removeEventListener('resize', updateCarouselWidth)
    }
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
          initial={{ x: 140 }}
          animate={{ x: 0 }}
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
