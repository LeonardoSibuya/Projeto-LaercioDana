import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Header from './container/Header'
import Footer from './container/Footer'

import Home from './Pages/Home'
import Midias from './Pages/Midias'
import Produtos from './Pages/Produtos'
import EstiloGlobal from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/produtos',
    element: <Produtos />
  },
  {
    path: '/midias',
    element: <Midias />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      {/* <Header /> */}
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
