import { DragHandleIcon, DownloadIcon, EditIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";
import google from "../images/google.png";
import Appstore from "../images/Appstore.png";
import {
  Popover,
  Text,
  Image,
  Box,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";

const NavbarsideDrawer = () => {
  const navigate = useNavigate();

  const adminhandlepanel = () => {
    navigate("./admin");
  };

  const carthandlepageF = () => {
    navigate("./cart");
  };
  const signUppagehandle = () => {
    navigate("./signup");
  };
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <DragHandleIcon />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {/* -------------------- */}
            <br />
            <Popover trigger={"hover"} placement="left">
              <PopoverTrigger>
                <Flex align={"center"} gap={"5px"}>
                  <Text fontSize={18}>
                    <DownloadIcon />
                  </Text>
                  <Text
                    color={"black"}
                    fontSize={["8px", "8x", "15px"]}
                    cursor={"pointer"}
                    _hover={{ color: "pink.400" }}>
                    Download App
                  </Text>
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                {/* <PopoverCloseButton /> */}
                <PopoverHeader fontSize={19}>Download From</PopoverHeader>
                <Image src={google} w={"160px"} h={"60px"} ml={"18px"} />
                <Image src={Appstore} w={"163px"} h={"72px"} ml={"18px"} />
              </PopoverContent>
            </Popover>
            <br />
            {/* ------------------------------- */}

            <hr />
            <br />
            <Box
              onClick={adminhandlepanel}
              display={"flex"}
              cursor="pointer"
              alignItem={"center"}
              gap={"5px"}>
              <EditIcon fontSize={"16px"} />
              <Text
                _hover={{ color: "pink.400" }}
                fontSize={["9px", "8x", "15px"]}>
                Admin
              </Text>
            </Box>
            {/* ------------------profile---------------- */}
            <br />
            <hr />
            <br />
            <Box
              display={"flex"}
              cursor="pointer"
              alignItem={"center"}
              gap={"5px"}>
              <BiUser fontSize={"16px"} />{" "}
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Text
                    fontSize={{ bse: "5px", md: "8px", lg: "38px" }}
                    _hover={{ color: "pink.400" }}>
                    Profile
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" padding={"2px 20px"}>
                    Hello User
                  </PopoverHeader>
                  <Text fontSize={"10px"}>To access your Messho account</Text>
                  <hr />
                  <PopoverArrow />
                  <Button
                    m={"10px"}
                    bg={"pink.400"}
                    fontSize={{ base: "9px", md: "9px", lg: "16px" }}
                    color={"white"}
                    _hover={{ bg: "pink.500" }}
                    onClick={signUppagehandle}>
                    Sign Up
                  </Button>
                  <hr />
                  <Flex align={"center"} gap="10px" m="10px 25px">
                    <BiShoppingBag fontSize={20} />
                    <Text fontSize={"13px"}>My Orders</Text>
                  </Flex>
                </PopoverContent>
              </Popover>
              {/* <Text _hover={{color:'pink.400'}}  fontSize={["9px", "8x", "15px"]}>Profile </Text> */}
            </Box>
            <br />
            <hr />
            <br />
            <Box
              display={"flex"}
              align="center"
              gap="5px"
              onClick={carthandlepageF}>
              <BsCart2 fontSize={"16px"} />
              <Text
                _hover={{ color: "pink.400" }}
                fontSize={["9px", "8x", "15px"]}>
                Cart
              </Text>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavbarsideDrawer;
