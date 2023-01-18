import { Routes, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";

import { Otp } from "../components/signup/otp";
import Admin from "./admin";
import SignUp from "./signup";
import Products from "./Products";
import Home from "./Home";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/SingleProduct" element={<SingleProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
