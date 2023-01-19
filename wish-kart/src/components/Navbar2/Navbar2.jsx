import React from "react";
import "./navbar.css";
import wishCartImg from "../Images/WishKart.jpg";
import { Box, Image,HStack } from "@chakra-ui/react";

const Navbar2 = () => {
  return (
    <Box
      w={{ base: "100%", md: "100%", lg: "100%" }}
      boxShadow={
        " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }
      bg={"white"}
      position={'fixed'}
      top={"5"}
      zIndex={'3'}
      mt={{base:'-5.2%',md:'-2.2%',lg:'-1.5%'}}
      marginBottom={'200PX'}
    >
      <Image
        src={wishCartImg}
        w={{ base: "40%", md: "14%", lg: "9%" }}
        padding={"10px 25px"}
        textAlign={{base:'center',md:'left',lg:'left'}}
      />
    </Box>
   
    );
};

export default Navbar2;
