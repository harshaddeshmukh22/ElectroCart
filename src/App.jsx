import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Detail from './components/Detail'
import Cart from './components/Cart'
import SearchItem from './components/SearchItem'
import {items} from './components/Data'


const App = () => {
  const [data, setData] = useState([...items])

  const [cart, setCart] = useState([])

  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData}/>
   <Routes>
    <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
    <Route path='/search/:term' element={<SearchItem/>} />
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
    <Route path='/product/:id' element={<Detail/>} />
   </Routes>
     
     </Router>
    </>
  )
}

export default App
