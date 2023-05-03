import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/adminSide/Dashboard";
import AddNewProduct from "../components/adminSide/addProduct";
import ProductManager from "../components/adminSide/productManager";
import { getProducts } from "../redux/Products/product.action";
import AdminNav from "../components/adminSide/adminNav";
import Orders from "../components/adminSide/orders";

export default function AdminSide() {
  const [showPage, setShowPage] = React.useState("Dashboard");
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { adminAuth } = useSelector((store) => store.AdminManager);

  React.useEffect(() => {
    if (adminAuth === false) {
      console.log("Admin not authenticated");
      navigate("/adminsignup");
    }
    window.scrollTo(0, 0);
  }, [adminAuth]);

  // redux end
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <>
      <AdminNav showPage={showPage} setShowPage={setShowPage} />
      <Box
        w="80%"
        minH="710px"
        ml={"20%"}
        bg={useColorModeValue("gray.100", "gray.900")}
        p="5px 10px">
        {showPage === "Dashboard" ? (
          <Dashboard />
        ) : showPage === "Products" ? (
          <ProductManager />
        ) : showPage === "Add New Product" ? (
          <AddNewProduct setShowPage={setShowPage} />
        ) : showPage === "Orders" ? (
          <Orders />
        ) : null}
      </Box>
    </>
  );
}
