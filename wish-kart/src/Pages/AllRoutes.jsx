import { Routes, Route } from "react-router-dom";
import SingleProduct from "./SingleProduct";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/SingleProduct" element={<SingleProduct />} />
    </Routes>
  );
}
