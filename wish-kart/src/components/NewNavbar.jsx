import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverArrow,
  PopoverHeader,
  Show,
  Hide,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import logo from "../images/wish.png";
import MegaMenu from "./MegaMenu";
import { FaMobileAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import google from "../images/google.png";
import Appstore from "../images/Appstore.png";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import NavbarsideDrawer from "./NavbarSideDrawer";

export default function NewNavbar() {
  const navigate = useNavigate();
  const hanldegotolandingpage = () => {
    navigate("./");
  };

  const adminhandle = () => {
    navigate("./admin");
  };
  const handlecatsection = () => {
    navigate("./cart");
  };

  const handlesiginPage = () => {
    navigate("./signup");
  };
  return (
    <>
      <Box
        top={0}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        h={"55px"}
        zIndex={1}
        position={"fixed"}>
        <Box
          display={{ base: "", md: "", lg: "flex" }}
          alignItems={"center"}
          bg={"white"}
          position={"relative"}>
          {/* ---------------------website-logo---------------- */}
          <Image
            onClick={hanldegotolandingpage}
            src={logo}
            w={{ base: "18%", md: "8%", lg: "5%" }}
            m={{ base: "1% 0 1% 2%", md: "0% 2%", lg: "1% 4%" }}
          />
          {/* --------------------input box------------- */}
          <Box
            display={{ base: "flex", md: "flex", lg: "flex" }}
            alignItems={"center"}
            borderWidth="1px"
            w={{ base: "", md: "50%", lg: "28%" }}
            padding={{ base: "", md: "", lg: "10px 15px" }}
            fontSize={{ base: "", md: "", lg: "15px" }}
            gap={"5px"}
            borderRadius={"5px"}>
            <SearchIcon />
            <Input
              fontSize={{ base: "", md: "", lg: "15px" }}
              variant="unstyled"
              placeholder="Try Saree,Kurti or Search by Product Code"
              border={"none"}
            />
          </Box>
          {/* --------------------------admin-&-app-download--------------- */}
          <Box
            display={{ base: "none", md: "none", lg: "flex" }}
            alignItems={"center"}
            gap={"10px"}
            marginLeft={{ base: "", md: "", lg: "24%" }}>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Flex align={"center"} gap={"5px"}>
                  <Text fontSize={18}>
                    <FaMobileAlt />
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
            {/* -------------------divider--------------- */}

            <Flex bg={"black"} h="32px">
              <Divider orientation="vertical" color={"black"} />
            </Flex>
            {/* ----------------------admin----------------- */}
            <Box onClick={adminhandle} cursor="pointer">
              <Text _hover={{ color: "pink.400" }} fontSize={"15px"}>
                Admin
              </Text>
            </Box>
            {/* -------------again-divider------------------------------ */}
            <Flex bg={"black"} h="32px">
              <Divider orientation="vertical" color={"black"} />
            </Flex>
          </Box>
          {/* ----------------------------profile------------------ */}

          <Box
            display={"flex"}
            m={{ base: "", md: "", lg: "0 30px" }}
            gap={"35px"}>
            <Box fontSize={"15px"} align="center" mt={"-14px"} cursor="pointer">
              <BiUser fontSize={"18px"} />
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Text
                    fontSize={{ bse: "", md: "", lg: "38px" }}
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
                    fontSize={{ base: "", md: "", lg: "16px" }}
                    color={"white"}
                    _hover={{ bg: "pink.500" }}
                    onClick={handlesiginPage}>
                    Sign Up
                  </Button>
                  <hr />
                  <Flex align={"center"} gap="10px" m="10px 25px">
                    <BiShoppingBag fontSize={20} />
                    <Text fontSize={"13px"}>My Orders</Text>
                  </Flex>
                </PopoverContent>
              </Popover>
            </Box>

            {/* --------------------------cart-section--------------------------- */}
            <Box
              fontSize={"15px"}
              align="center"
              mt={"-14px"}
              onClick={handlecatsection}
              cursor="pointer">
              <BsCart2 fontSize={"18px"} />
              <Text _hover={{ color: "pink.400" }}>Cart</Text>
            </Box>
          </Box>
          {/* ---------------------------------side-navbar----------------------- */}
          <Box>
            <NavbarsideDrawer />
          </Box>
        </Box>
        {/* 
        <Box
          top={0}
          w={"100%"}
          h={"55px"}
          mt={"80px"}
          bg={"white"}
          position={"absolute"}>
          <MegaMenu />
        </Box> */}
      </Box>
    </>
  );
}
