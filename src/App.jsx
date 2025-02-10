import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import FavoritePage from './pages/FavoritePage'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/favorite' element={<FavoritePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/category' element={<CategoryPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
