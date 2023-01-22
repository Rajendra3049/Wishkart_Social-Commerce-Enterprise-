import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Hide,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";

import cash from "../images/cash.png";
import returns from "../images/returns.png";
import { CiDeliveryTruck } from "react-icons/ci";
import playstore from "../images/playstore.png";
import snip1 from "../images/snip1.png";
import snip2 from "../images/snip2.png";
import snip3 from "../images/snip3.png";
import snip4 from "../images/snip4.png";
import HomeProducts from "../Pages/homeproducts";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box w={"95%"} m={"auto"} mt={"188px"} >
      <Box bg={"#f9f9f9"} w={["140%","120%","120%","85%"]} m={"auto"} h={["370px","370px","370px","370px"]} ml={["100px","70px","0px","auto"]} mt={"80px"} border={"2px solid red"} >

        <Flex>
          <Box w={"590px"} mt={["0px","0px","0px","60px"]} ml={["10px", "80px","90px", "10px"]} border={"1px solid blue"}>
            <Heading
              fontSize={["25px", "30px", "35px", "40px"]}
              ml={["0px", "40px","0px", "10px"]}
              lineHeight={"56px"}
              color={"#333333"}
              fontWeight={650}

              textAlign={["center","center","center","left"]}
            >

              Lowest Prices{" "}
            </Heading>
            <Heading
              fontSize={["25px", "30px", "35px", "40px"]}
              lineHeight={"56px"}
              color={"#333333"}
              fontWeight={650}
              mt={["-24px", "2px", "5px"]}

              textAlign={["center","center","center","left"]}
            >


              {" "}
              Best Quality Shopping{" "}
            </Heading>

            <Box   border={"2px solid yellow"}>
              <Flex ml={["50px","80px","50px","0px"]}>
                <Box
                  backgroundColor={"#f7a8ca"}
                  borderRadius={"50%"}
                
                  w={"38px"}
                  h={"38px"}
                  mt={"27px"}
                  p={1}>
                  <Flex>
                    <Text fontSize={"30px"} ml={"4px"}>
                      <CiDeliveryTruck bg={"#f7a8ca"} mt={"15px"} />
                    </Text>
                    <Text
                      fontWeight={400}
                      ml={"17px"}
                      fontSize={"14px"}
                      mt={"-5px"}>
                      Free Delievery
                    </Text>
                    <Flex bg={"black"} h="45px" ml={"18px"} mt={"-5px"}>
                      <Divider orientation="vertical" color={"black"} />
                    </Flex>
                  </Flex>
                </Box>

                <Box>
                  <Flex>
                    <Box
                      backgroundColor={"#f7a8ca"}
                      borderRadius={"50%"}
                      w={"38px"}
                      h={"38px"}
                      mt={"27px"}
                      ml={"120px"}>
                      <Flex>
                        <Image
                          src={cash}
                          width={"30px"}
                          m={"auto"}
                          mt={"4px"}
                          ml={"3px"}></Image>
                        <Text fontWeight={400} ml={"20px"} fontSize={"14px"}>
                          Cash On Delievery
                        </Text>
                      </Flex>
                    </Box>
                    <Box
                      backgroundColor={"#f7a8ca"}
                      borderRadius={"50%"}
                      w={"38px"}
                      h={"38px"}
                      mt={"27px"}
                      ml={"110px"}>
                      <Flex>
                        <Flex bg={"black"} h="48px" mt={"-7px"} ml={"-10px"}>
                          <Divider orientation="vertical" color={"black"} />
                        </Flex>
                        <Image
                          src={returns}
                          width={"30px"}
                          m={"auto"}
                          ml={"13px"}
                          mt={"2px"}></Image>
                        <Text fontWeight={400} ml={"20px"} fontSize={"14px"}>
                          Easy Returns
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              <Box mt={"34px"}>
                <Flex>
                  <Button
                    w={"312px"}
                    h={"48px"}
                    ml={["114px","145px","60px","0px"]}
                    bg={"#f43397"}
                    color={"white"}
                    _hover={"#f43397"}
                    fontSize={18}
                    fontWeight={550}>
                    {" "}
                    <Image src={playstore} w={12} h={12} mr={5} /> Download the
                    WishKart App
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box mt={"0px"}>
          <Hide below="md">
            <Image src="https://images.meesho.com/images/marketing/1631722939962.webp"/>
            </Hide>
          </Box>
        </Flex>
      </Box>
      <Box mt={"30px"}>
        <Flex>
          <Divider
            orientation="horizontal"
            width={"19%"}
            height={"1px"}
            bg={"rgb(247, 168, 202)"}
            mt={"70px"}
            ml={["100px", "10px", "100px"]}
          />
          <Heading
            fontSize={["15px", "20px", "36px"]}
            lineHeight={"44px"}
            color={"#333333"}
            mt={["50px", "50px", "40px"]}

            ml={["65px", "", "35px"]}

            Top Categories to choose from
          </Heading>
          <Divider
            orientation="horizontal"
            width={"19%"}
            height={"1px"}
            bg={"rgb(247, 168, 202)"}
            mt={["71px", "70px", "70px"]}
            ml={["70px", "10px", "35px"]}
          />
        </Flex>
      </Box>

      <Box w={"95%"} m={"auto"} h={"545px"} mt={["45px", "45px", "100px"]}>
        <Image src={snip1} m={"auto"} w={"86%"} borderRadius={"8px"} />
      </Box>
      <Box w={"95%"} m={"auto"} h={"545px"} mt={["10px", "-333px", "40px"]}>
        <Image src={snip2} m={"auto"} w={"86%"} borderRadius={"8px"} />
      </Box>

      <Box w={"95%"} m={"auto"} h={"545px"} mt={["10px", "-333px", "40px"]}>
        <Image src={snip3} m={"auto"} w={"86%"} borderRadius={"8px"} />
      </Box>
      <Box w={"95%"} m={"auto"} h={"350px"} mt={["10px", "-333px", "40px"]}>
        <Image src={snip4} m={"auto"} w={"86%"} borderRadius={"8px"} />
      </Box>

      {/* home down section */}
      <Flex gap={8} display={{sm:"block",md:"block",lg:"flex",xl:"flex"}}>
        <Box w={["150%","95%","95%","30%"]} mt={"25px"} >
          <Heading color={"#333333"} ml={["80px","110px","20px","10px"]} fontSize={["18px" , "20px" ,"22px"]}>Products For You</Heading>
          <Card  h={"720px"} borderRadius={"8px"}w={["100%","100%","100%","90%"]} ml={["80px","110px","20px","0px"]} mt={["20px","",""]}>
            <Accordion fontSize={"15px"} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Category
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Price
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    color={"gray"}
                    w={"95px"}
                    h={"36px"}
                    border={"1px solid rgb(240, 240, 240)"}
                    borderRadius={"10%"}
                  >
                    <Text align={"center"} mt={2}>
                      Under ₹ 149
                    </Text>
                  </Box>
                  <Box
                    color={"gray"}
                    w={"95px"}
                    h={"36px"}
                    border={"1px solid rgb(240, 240, 240)"}
                    borderRadius={"10%"}
                    mt={5}
                  >
                    <Text align={"center"} mt={2}>
                      Under ₹ 199
                    </Text>
                  </Box>
                  <Box
                    color={"gray"}
                    w={"95px"}
                    h={"36px"}
                    border={"1px solid rgb(240, 240, 240)"}
                    borderRadius={"10%"}
                    mt={5}
                  >
                    <Text align={"center"} mt={2}>
                      Under ₹ 249
                    </Text>
                  </Box>
                  <Box
                    color={"gray"}
                    w={"95px"}
                    h={"36px"}
                    border={"1px solid rgb(240, 240, 240)"}
                    borderRadius={"10%"}
                    mt={5}
                  >
                    <Text align={"center"} mt={2}>
                      Under ₹ 399
                    </Text>
                  </Box>
                  <Box
                    color={"gray"}
                    w={"95px"}
                    h={"36px"}
                    border={"1px solid rgb(240, 240, 240)"}
                    borderRadius={"10%"}
                    mt={5}
                  >
                    <Text align={"center"} mt={2}>
                      Under ₹ 999
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Size
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Occasion
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Brand
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Meesho Mall
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Colour
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Type
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Combo
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}
                    >
                      Meesho Mall
                    </Box>
                    <AccordionIcon fontSize={20} />
                  </AccordionButton>
                </h2>
                <AccordionPanel h={"220px"}>
                  <Flex>
                    <Checkbox color={"black"}>
                      <RouterLink to="/beauthHealth">
                        <Text
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          fontSize={"18px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Beauty & Health
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/women">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Womens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/men">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Mens Wear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/homeKitchen">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Home & Kitchen
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/jewellery">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Jewellery
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>

                  <Flex mt={"10px"}>
                    <Checkbox color={"black"}>
                      <RouterLink to="/bagsFootwear">
                        <Text
                          fontSize={"18px"}
                          _hover={{ bg: "#f7a8ca" }}
                          w={"400px"}
                          color={"#333333"}
                          ml={"18px"}
                        >
                          Bags and Footwear
                        </Text>
                      </RouterLink>
                    </Checkbox>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Card>
        </Box>
        <Box w={["140%","145%","100%","80%"]} padding={10} border={"1px solid black"} ml={["100px","20px","8px","0px"]} mt={["50px","50px","50px","0px"]}>
          <HomeProducts />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
