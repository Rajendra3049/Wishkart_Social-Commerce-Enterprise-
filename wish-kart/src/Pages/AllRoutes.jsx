import { Routes, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";

import { Otp } from "../components/signup/otp";
import Admin from "./admin";
import SignUp from "./signup";
import Products from "./Products";
import Home from "./Home";
export default function AllRoutes() {
  const p = {
    id: 1,
    category: "Sarees",
    title: "WETLESS RAINBOW ZARI",
    original_price: 416,
    discounted_price: 316,
    sizes: ["Free Size"],
    images: [
      "https://images.meesho.com/images/products/72024275/9cvk9_512.jpg",
      "https://images.meesho.com/images/products/72349131/ndz0q_512.jpg",
      "https://images.meesho.com/images/products/72349131/tzpv8_512.jpg",
      "https://images.meesho.com/images/products/72349131/9dvpk_512.jpg",
    ],
    details: {
      Fabric: "Chiffon",
      Pattern: "Self Design",
      Multipack: "Single",
      Description: "Best qaualtiy ",
    },
    rating: 3.9,
    seller_id: 1,
  };
  return (
    <Routes>
      <Route path="/SingleProduct" element={<SingleProduct props={p} />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
