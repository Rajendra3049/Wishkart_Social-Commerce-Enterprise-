import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Address from "./Address/Address.jsx";
import Cart from "./Cart/Cart.jsx";
import Payment from "./Payment/Payment.jsx";
import CartEmpty from "./Cart/CartEmpty.jsx";
import SingleProduct from "./SingleProduct";
import { Otp } from "../components/signup/otp";
import SignUp from "./signup";
import Products from "./allProducts/Products";
import Home from "./Home";
import AdminSide from "./adminSide";
import Men from "./allProducts/men";
import Women from "./allProducts/women";
import Jewellery from "./allProducts/jewellery";
import HomeKitchen from "./allProducts/homeKitchen";
import BeauthHealth from "./allProducts/beauty";
import BagsFootwear from "./allProducts/bagsFootwear";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/admin" element={<AdminSide />} />
      <Route path="/products" element={<Products />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/beauthHealth" element={<BeauthHealth />} />
      <Route path="/homeKitchen" element={<HomeKitchen />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/bagsFootwear" element={<BagsFootwear />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cartempty" element={<CartEmpty />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
