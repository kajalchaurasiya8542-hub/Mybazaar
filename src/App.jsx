import Header from './Components/Header'
import Home from './pages/home'
import ProductDetails from './pages/ProductDetails'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>




    </div>
  )
}
