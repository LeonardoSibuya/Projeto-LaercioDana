import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import EstiloGlobal from './styles'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Info from './Pages/Info'
import Faq from './Pages/Faq'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/manual" element={<Info />} />
          <Route path="/duvidas" element={<Faq />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
