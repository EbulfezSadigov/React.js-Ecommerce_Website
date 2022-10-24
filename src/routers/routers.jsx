import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import Home from '../pages/home'
import Login from '../pages/login'
import Details from '../pages/productdetails'
import Shop from '../pages/shop'
import Signup from '../pages/signup'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<Details/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers