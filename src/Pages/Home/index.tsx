import { useEffect, useState } from 'react'
import AboutUs from '../../components/AboutUs'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProductsHome from '../../components/ProductsHome'
import Sidebar from '../../components/Sidebar'
import Video from '../../components/Video'
import Loader from '../../components/Loader'

const Home = () => {
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
          <Banner />
          <Sidebar />
          <AboutUs />
          <Video />
          <ProductsHome />
          <Footer />
        </>
      )}
    </>
  )
}

export default Home
