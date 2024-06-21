import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"
import { Products } from "./pages/Products"

function App() {
 
  return (
    
    <div className='App'>
    <Router>
    <Navbar />
    <Products />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </div>
    
  )
}


export default App
