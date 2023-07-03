import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import ProductsItem, { PropsProducts } from '../../components/Products'

import blocanteUm from '../../images/pecas/eixo-blocante-sf.png'
import blocanteDois from '../../images/pecas/peca-um-sf.png'
import blocanteTres from '../../images/pecas/eixo-cinco-sf.png'

import convencionalUm from '../../images/pecas/peca-dois-sf.png'
import convencionalDois from '../../images/pecas/eixo-convencional.png'
import convencionalTres from '../../images/pecas/eixo-tres-sf.png'

import componenteUm from '../../images/acessorios/acessorio-um-sf.png'
import componenteDois from '../../images/acessorios/acessorios.png'
import componenteTres from '../../images/acessorios/rolamento-sf.png'
import Whatsapp from '../../components/Whatsapp'

const Mock: PropsProducts[] = [
  {
    id: 1,
    title: 'EIXO TL Blocante',
    description:
      'Se você possui um carro clássico e deseja melhorar a aderência e a estabilidade em curvas, o diferencial blocante é o componente ideal. O blocante permite que as rodas traseiras girem juntas, distribuindo a potência de forma mais uniforme e evitando que uma roda escorregue enquanto a outra permanece parada. Compre agora mesmo seu diferencial blocante e transforme seu carro clássico em uma máquina de alta performance!.',
    imageOne: `${blocanteUm}`,
    imageTwo: `${blocanteDois}`,
    imageThree: `${blocanteTres}`,
    externalLink:
      'https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0',
    pageLink: '/manual',
    price: 'R$ 12.400,00',
    oldPrice: 'R$ 13.000,00',
    dataAos: 'zoom-out-down'
  },
  {
    id: 2,
    title: 'Eixo OT Convencional',
    description:
      'Se você busca alto desempenho, resistência, qualidade e segurança para seu carro clássico, o Dana 44 é a escolha certa! Compre agora mesmo e faça história no mundo dos carros antigos!. 100% original, classico, resistente, seguro ',
    imageOne: `${convencionalUm}`,
    imageTwo: `${convencionalDois}`,
    imageThree: `${convencionalTres}`,
    externalLink:
      'https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0',
    pageLink: '/manual',
    price: 'R$ R$ 9.200,00',
    oldPrice: 'R$ 10.000,00',
    dataAos: 'zoom-out-down'
  },
  {
    id: 3,
    title: 'Componentes',
    description:
      'Oferecemos uma ampla variedade de peças para o seu eixo diferencial. Entre em contato conosco agora mesmo para consultar a disponibilidade e os melhores preços das peças que você precisa. Estamos prontos para ajudá-lo a encontrar as peças certas para o seu veículo e garantir a máxima qualidade e segurança em sua condução. Consultar disponibilidade',
    imageOne: `${componenteUm}`,
    imageTwo: `${componenteDois}`,
    imageThree: `${componenteTres}`,
    externalLink:
      'https://api.whatsapp.com/message/R473PNFS4JIEI1?autoload=1&app_absent=0',
    pageLink: '/manual',
    dataAos: 'zoom-out-down'
  }
]

const Products = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <HeaderSecondayPages titlePage="Produtos" />
          <Sidebar />
          <Carousel />
          <ul>
            {Mock.map((products) => (
              <ProductsItem
                key={products.id}
                id={products.id}
                title={products.title}
                description={products.description}
                imageOne={products.imageOne}
                imageTwo={products.imageTwo}
                imageThree={products.imageThree}
                externalLink={products.externalLink}
                pageLink={products.pageLink}
                oldPrice={products.oldPrice}
                price={products.price}
                dataAos={products.dataAos}
              />
            ))}
          </ul>
          <Footer marginTop="160px" />
          <Whatsapp />
        </>
      )}
    </div>
  )
}

export default Products
