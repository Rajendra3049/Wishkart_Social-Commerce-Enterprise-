import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Stack,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverArrow,
  PopoverHeader,
  Heading,
} from "@chakra-ui/react";

import logo from "../images/wish.png";
import MegaMenu from "../components/MegaMenu";
import { FaMobileAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import google from "../images/google.png";
import Appstore from "../images/Appstore.png";
import { BiShoppingBag } from "react-icons/bi";
import { Link, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
var data = require("../input.json");

export default function Navbar() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <>
      <Box top={0} w={"100%"} h={"55px"} zIndex={100} position={"fixed"}>
        <Box
          width={["1300px", "1300px", "100%"]}
          justifyContent={"center"}
          h={["158x"]}
          bg={"white"}
          border={"1px solid gray"}
          position={"relative"}>
          <Flex h={"100px"} alignItems={"center"} w={"100%"}>
            <RouterLink to="/">
              <Image
                src={logo}
                w={["65%", "70%", "100%"]}
                h={["99px", "99px", "100px"]}
                ml={["20px", "20px", "20px"]}
                mt={["-10px", "", ""]}
              />
            </RouterLink>
            <Flex>
              {/* <Stack
                spacing={3}
                w={["200px", "300px", "400px"]}
                ml={["5%", "5%", "10%"]}
                mt={"-20px"}
              >
              
                <Input
                value={value} onChange={onChange} 
                type="text"
                  placeholder="Try Saree,Kurti or Search by Product Code"
                  width={["80%", "80%", "100%"]}
                  h={["25px", "30px", "45px"]}
                  color={"black"}
                  borderWidth="1px"
                  fontSize={["8px", "8x", "15px"]}
             
                />
            
              
    
              </Stack> */}
              <Stack
                className="search-container"
                spacing={3}
                w={["200px", "300px", "400px"]}
                ml={["5%", "5%", "10%"]}
                // mt={"99px"}
              >
                <Box>
                  {/* <input type="text" value={value} onChange={onChange} /> */}
                  <Input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="Try Saree,Kurti or Search by Product Code"
                    width={["80%", "80%", "100%"]}
                    h={["25px", "30px", "45px"]}
                    color={"black"}
                    borderWidth="1px"
                    fontSize={["8px", "8x", "15px"]}
                  />
                  {/* <button onClick={() => onSearch(value)}> Search </button> */}
                </Box>
                {/* dropdown */}

                <Box border="1px solid red" zIndex={99} className="dropdown">
                  {data
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <Link to={item.href}>
                        <Box
                          onClick={() => onSearch(item.name)}
                          key={item.name}>
                          {item.name}
                        </Box>
                      </Link>
                    ))}
                </Box>
              </Stack>
            </Flex>
            <Box
              display={"flex"}
              textAlign={"center"}
              gap={10}
              ml={["", "", "20%"]}>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Flex _hover={{ color: "#f43397", fontWeight: 600 }}>
                    <Text fontSize={18} mt={"-13px"}>
                      <FaMobileAlt />
                    </Text>
                    <Text
                      // color={"black"}
                      fontSize={["8px", "8x", "15px"]}
                      mt={"-15px"}
                      ml={"10px"}
                      cursor={"pointer"}>
                      Download App
                    </Text>
                  </Flex>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader fontSize={19}>Download From</PopoverHeader>
                  <Image src={google} w={"160px"} h={"60px"} ml={"18px"} />
                  <Image src={Appstore} w={"163px"} h={"72px"} ml={"18px"} />
                </PopoverContent>
              </Popover>
              <Flex bg={"black"} h="32px" mt={"-18px"}>
                <Divider orientation="vertical" color={"black"} />
              </Flex>
              <RouterLink to="/admin">
                <Text
                  fontSize={["8px", "8x", "15px"]}
                  mt={"-15px"}
                  cursor={"pointer"}>
                  {" "}
                  Admin
                </Text>
              </RouterLink>
              <Flex bg={"black"} h="32px" mt={"-18px"}>
                <Divider orientation="vertical" color={"black"} />
              </Flex>
            </Box>
            {/* profile and cart */}
            <Box display={"flex"} ml={"60px"}>
              <Box m={10}>
                <Text
                  fontSize={28}
                  mt={"-20px"}
                  ml={"6px"}
                  _hover={{ color: "#f43397", fontWeight: 600 }}>
                  <BiUser />{" "}
                </Text>
                <Popover trigger={"hover"}>
                  <PopoverTrigger>
                    <Flex>
                      <Text
                        fontSize={["8px", "8x", "15px"]}
                        mt={"5px"}
                        cursor={"pointer"}
                        _hover={{ color: "#f43397", fontWeight: 600 }}>
                        {" "}
                        Profile
                      </Text>
                    </Flex>
                  </PopoverTrigger>
                  <PopoverContent h={"170px"} w={"240px"}>
                    <PopoverArrow />

                    <Heading
                      fontSize={18}
                      mt={"15px"}
                      color={"#333333"}
                      ml={"20px"}>
                      Hello User
                    </Heading>
                    <Text mt={"5px"} ml={"20px"} fontSize={"10px"}>
                      To access your Meesho account
                    </Text>
                    <RouterLink to="/signup">
                      <Button
                        bg={"#f43397"}
                        color={"white"}
                        w={"210px"}
                        ml={"15px"}
                        mt={"10px"}
                        h={"45px"}
                        fontSize={"17px"}>
                        Sign Up
                      </Button>
                    </RouterLink>

                    <PopoverHeader></PopoverHeader>
                    <Flex mt={"10px"} ml={"10px"}>
                      <BiShoppingBag fontSize={20} />
                      <p style={{ marginLeft: "10px", fontSize: "15px" }}>
                        My Orders
                      </p>
                    </Flex>
                  </PopoverContent>
                </Popover>
              </Box>

              <Box m={10}>
                <RouterLink to="/cart">
                  <Text fontSize={28} mt={"-20px"}>
                    <BsCart2 />
                  </Text>

                  <Text
                    fontSize={["8px", "8x", "15px"]}
                    mt={"5px"}
                    cursor={"pointer"}>
                    Cart
                  </Text>
                </RouterLink>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          top={0}
          w={"100%"}
          h={"55px"}
          mt={"80px"}
          bg={"white"}
          position={"absolute"}>
          <MegaMenu />
        </Box>
      </Box>
    </>
  );
}
