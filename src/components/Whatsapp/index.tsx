import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Content } from './styles'

import wpp from '../../images/icons/whatsapp-pages.png'

const Whatsapp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <Content data-aos="zoom-in-up">
      <a href="">
        <img src={wpp} alt="" />
      </a>
    </Content>
  )
}

export default Whatsapp
