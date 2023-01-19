import { Box, Button, color, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2/Navbar2";

const CartEmpty = () => {
  const  navigate= useNavigate();
  const producthandle = () => {
    navigate("/") 
  };
  return (
    <>
      <Navbar2 />
      <Box
        w={{ base: "80%", md: "50%", lg: "80%" }}
        m={{ base: "auto", md: "40px auto" }}
        textAlign={"center"}
      >
        <Image
          m={"auto"}
          src="https://images.meesho.com/images/pow/empty-cart.png"
        ></Image>
        <Text margin={"10px"} fontWeight={"550"} fontSize={"20px"}>
          Your cart is empty
        </Text>
        <Button
          border={"2px solid pink"}
          color={"pink.400"}
          bg={"white"}
          padding={"15px 40px"}
          fontSize={'18px'}
          fontWeight={"600"}
          _hover={{ bg: "pink", color: "white", border: "2px solid white" }}
          onClick={producthandle}
        >
          View Product
        </Button>
      </Box>
    </>
  );
};

export default CartEmpty;
