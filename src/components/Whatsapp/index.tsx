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
      <a
        href="https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <img src={wpp} alt="Logo WhatsApp" />
      </a>
    </Content>
  )
}

export default Whatsapp
