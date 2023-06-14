import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import EstiloGlobal from './styles'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Info from './Pages/Info'
import Faq from './Pages/Faq'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/produtos',
    element: <Products />
  },
  {
    path: '/manual',
    element: <Info />
  },
  {
    path: '/duvidas',
    element: <Faq />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
