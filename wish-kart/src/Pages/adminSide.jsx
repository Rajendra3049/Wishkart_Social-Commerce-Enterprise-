import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import style from "../styles/adminSide.module.css";

import AddProduct from "./addProduct";
import OrderAccept from "../components/adminSide/orderAccept";
import ProductManage from "../components/adminSide/productManage";
import { getProducts } from "../redux/Products/product.action";
import { Link as RouterLink } from "react-router-dom";

export default function AdminSide() {
  // redux start
  let { loading, error, isAuth, user } = useSelector(
    (store) => store.UserManager
  );
  let { data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();

  // redux end
  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <div className={style.main}>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList
          className={style.list}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          paddingLeft="-2rem">
          <Tab fontSize="2rem" className={style.tab}>
            Add New Product
          </Tab>
          <Tab fontSize="2rem" className={style.tab}>
            Order Manage
          </Tab>
          <Tab fontSize="2rem" className={style.tab}>
            Product Manage
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddProduct />
          </TabPanel>
          <TabPanel>
            <OrderAccept />
          </TabPanel>
          <TabPanel>
            <ProductManage data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
