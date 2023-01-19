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
      <Route path="/admin" element={<AdminSide />} />
      <Route path="/products" element={<Products />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/beauthHealth" element={<BeauthHealth />} />
      <Route path="/homeKitchen" element={<HomeKitchen />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/bagsFootwear" element={<BagsFootwear />} />
    </Routes>
  );
}
