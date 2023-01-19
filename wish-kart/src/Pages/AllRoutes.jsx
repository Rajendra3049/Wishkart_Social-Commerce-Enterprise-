import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from './Address/Address.jsx'
import Cart from './Cart/Cart.jsx'
import Payment from './Payment/Payment.jsx'
import CartEmpty from './Cart/CartEmpty.jsx'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/address" element={<Address />} />
        <Route path='/cartempty' element={<CartEmpty/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
