import { useState, useEffect } from 'react'

import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import Footer from '../../components/Footer'

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
          <Footer />
        </>
      )}
    </div>
  )
}

export default Products
