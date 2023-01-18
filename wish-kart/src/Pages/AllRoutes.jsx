import { Routes, Route } from "react-router-dom";
import Products from "./Products";

export default function AllRoutes() {
  return <Routes>
    <Route path="/products" element={<Products/>}></Route>
  </Routes>;
}
