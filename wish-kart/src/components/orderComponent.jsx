import { Box, Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

export const OrderComponent = ({ data, loading }) => {
  const { address, user, amount, date, products, transactionID } = data;

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box key={transactionID}>
        {products.map((product) => (
          <Grid
            key={product._id}
            gridTemplateColumns={"10% 90%"}
            gap="5px"
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
            }
            mt="10px">
            <Box p="20px">
              <Link
                to={`/SingleProduct/${product.productId.category}/${product.productId._id}`}>
                <Image src={product.productId.images[0]} alt="product img" />
              </Link>
            </Box>
            <HStack justifyContent={"space-around"} fontSize={"14px"}>
              <Box>
                <Text>{product.productId.title}</Text>
                <Text color={"gray.500"}>{product.productId.category}</Text>
              </Box>
              <Text>Qty:{product.quantity}</Text>
              <Box textAlign={"center"}>
                <Text textDecoration={"line-through"} color={"gray.400"}>
                  Rs.{product.productId.original_price}
                </Text>
                <Text>Rs.{product.productId.discounted_price}</Text>
                <Text color={"gray.500"}>(price of 1)</Text>
              </Box>

              <Text>
                Total Price: Rs.
                {product.productId.discounted_price * product.quantity}
              </Text>
              <Text>{date}</Text>
              <Text>Order ID:{transactionID}</Text>
            </HStack>
          </Grid>
        ))}
      </Box>
    );
  }
};

export default OrderComponent;
