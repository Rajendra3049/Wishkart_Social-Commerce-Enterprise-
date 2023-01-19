import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from './Address/Address.jsx'
import Cart from './Cart/Cart.jsx'
import Payment from './Payment/Payment.jsx'
import CartEmpty from './Cart/CartEmpty.jsx'
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
  return <Routes></Routes>;
}

export default AllRoutes
