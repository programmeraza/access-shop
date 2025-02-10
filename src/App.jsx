import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import FavoritePage from './pages/FavoritePage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/favorite' element={<FavoritePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
