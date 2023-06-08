import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import EstiloGlobal from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import Products from './Pages/Products'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/produtos',
    element: <Products />
  }
  // {
  //   path: '/midias',
  //   element: <Midias />
  // }
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
