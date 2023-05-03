import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminGetOrders } from "../../redux/admin/admin.action";
import Loader from "../Loader";
import BarChart from "./barChart";
import OrderModal from "./orderModal";

// Register BarController and BarElement

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, token, orders } = useSelector((store) => store.AdminManager);

  React.useEffect(() => {
    dispatch(adminGetOrders(token));
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box h="90vh" maxH={"90vh"} pl="10px" mt="20px">
        <Box h="50vh">
          {orders.length !== 0 ? <BarChart orders={orders} /> : null}
        </Box>
        <Box overflowX="auto" display={"flex"} gap="8" mt="30px">
          {orders.orderData &&
            orders.orderData.map((e, i) => (
              <Box
                key={i}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                textAlign={"center"}
                pt="5px">
                <Image src={e[0].user.picture} alt="product image" m="auto" />
                <Box p="6">
                  <Flex alignItems="baseline">
                    <Text fontWeight="semibold" fontSize="2xl" mr="2">
                      Total Orders:
                    </Text>
                    <Text fontSize="2xl">{e.length}</Text>
                  </Flex>
                  <OrderModal data={e} />
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    );
  }
};

export default Orders;
