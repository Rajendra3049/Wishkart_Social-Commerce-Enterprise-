import { Routes, Route } from "react-router-dom";
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
      <Route path="/SingleProduct" element={<SingleProduct />} />
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
      <Route path="/SingleProduct" element={<SingleProduct />} />
    </Routes>
  );
}
