import { useState, useEffect } from 'react'

import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'

const Products = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
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
          <Footer />
        </>
      )}
    </div>
  )
}

export default Products
