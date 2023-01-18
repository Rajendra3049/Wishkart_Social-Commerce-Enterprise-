import { Routes, Route } from "react-router-dom";

import { Otp } from "../components/signup/otp";
import Admin from "./admin";
import SignUp from "./signup";
import Products from "./Products";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
