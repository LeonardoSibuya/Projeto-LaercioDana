import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Header from './container/Header'
// import Footer from './container/Footer'

import Home from './Pages/Home'
// import Midias from './Pages/Midias'
// import Produtos from './Pages/Produtos'
import EstiloGlobal from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
  // {
  //   path: '/produtos',
  //   element: <Produtos />
  // },
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
