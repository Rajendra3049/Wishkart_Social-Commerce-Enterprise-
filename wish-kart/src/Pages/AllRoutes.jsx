import { Routes, Route } from "react-router-dom";
import { Otp } from "../components/signup/otp";
import SignUp from "./signup";
import Products from "./Products";
import Home from "./Home";
import AdminSide from "./adminSide";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/admin" element={<AdminSide />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
