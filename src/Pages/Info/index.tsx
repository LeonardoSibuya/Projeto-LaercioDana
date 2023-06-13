import { useEffect, useState } from 'react'

import HeaderSecondayPages from '../../components/HeaderSecondaryPages'
import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar'
import Manual from '../../components/Manual'
import Footer from '../../components/Footer'

const Info = () => {
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
          <HeaderSecondayPages titlePage={'Manual'} />
          <Sidebar />
          <Manual />
          <Footer marginTop="0" />
        </>
      )}
    </div>
  )
}

export default Info
