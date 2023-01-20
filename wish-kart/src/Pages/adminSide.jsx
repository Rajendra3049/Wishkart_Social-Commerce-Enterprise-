import AddProduct from "./addProduct";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import style from "../styles/adminSide.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function AdminSide() {
  // redux start
  let { loading, error, isAuth, user } = useSelector(
    (store) => store.UserManager
  );
  let dispatch = useDispatch();
  // redux end

  console.log("adminside", user);
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
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddProduct />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
