import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "./Address/Address.jsx";
import Cart from "./Cart/Cart.jsx";
import CartEmpty from "./Cart/CartEmpty.jsx";
import SingleProduct from "./SingleProduct";
import { Otp } from "../components/signup/otp";
import Products from "./allProducts/Products";
import Home from "./Home";
import AdminSide from "./adminSide";
import Men from "./allProducts/men";
import Women from "./allProducts/women";
import Jewellery from "./allProducts/jewellery";
import HomeKitchen from "./allProducts/homeKitchen";
import BeauthHealth from "./allProducts/beauty";
import BagsFootwear from "./allProducts/bagsFootwear";
import HomeSingleProduct from "../components/homeSingleProduct.jsx";
import AdminSignin from "../components/adminSide/adminsignup.jsx";
import Order from "./order.jsx";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/SingleProduct/:category/:id" element={<SingleProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="/homeproduct" element={<HomeSingleProduct />} />

      <Route path="/otp" element={<Otp />} />
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
      <Route path="/adminsignup" element={<AdminSignin />} />
      <Route path="/admin" element={<AdminSide />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}
