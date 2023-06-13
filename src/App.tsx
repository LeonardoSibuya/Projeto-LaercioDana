import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import EstiloGlobal from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import Products from './Pages/Products'
import Info from './Pages/Info'

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
