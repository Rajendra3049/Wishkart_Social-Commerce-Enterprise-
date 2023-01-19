import AddProduct from "./addProduct";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import style from "../styles/adminSide.module.css";
export default function AdminSide() {
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
