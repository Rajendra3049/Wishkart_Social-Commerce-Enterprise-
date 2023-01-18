import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from './Address/Address.jsx'
import Cart from './Cart/Cart.jsx'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Cart/>} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
