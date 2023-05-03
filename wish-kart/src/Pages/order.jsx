import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../redux/user/user.action";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text } from "@chakra-ui/react";
import Loader from "../components/Loader";
import { OrderComponent } from "../components/orderComponent";

const Order = () => {
  const dispatch = useDispatch();
  let { loading, order } = useSelector((store) => store.UserManager);
  const { user } = useAuth0();

  React.useEffect(() => {
    dispatch(GetOrder(user.sub));
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box
        w={{ base: "80%", md: "80%", lg: "80%" }}
        margin={"190px auto"}
        gap="5">
        <Text
          fontSize={"30px"}
          bgColor={"#f43397"}
          color={"white"}
          padding={"5px"}
          fontWeight={"600"}>
          Orders
        </Text>

        <Box>
          {order.map((data) => (
            <OrderComponent data={data} loading={loading} />
          ))}
        </Box>
      </Box>
    );
  }
};

export default Order;
