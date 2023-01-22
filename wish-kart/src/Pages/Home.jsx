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

import snip1 from "../images/snip1.png";
import snip2 from "../images/snip2.png";
import snip3 from "../images/snip3.png";
import snip4 from "../images/snip4.png";
import banner from "../images/banner1.png";
import HomeProducts from "../Pages/homeproducts";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box w={"98%"} m={"auto"} padding={"20px"} mt={"200px"}>
      {/* banner start */}
      <Box>
        <Image src={banner} margin={"auto"} mb={"20px"} />

        {/* 1box end */}

        {/* heading */}

        <Heading
          fontSize={["15px", "25px", "36px", "36px"]}
          lineHeight={"44px"}
          color={"#333333"}
          textAlign={"center"}
          padding={["5px", "10px", "10px", "20px"]}>
          Top Categories to choose from
        </Heading>

        <Image src={snip1} margin={"auto"} mb={"20px"} />

        <Image src={snip2} margin={"auto"} mb={"20px"} />

        <Image src={snip3} margin={"auto"} mb={"20px"} />

        <Image src={snip4} margin={"auto"} mb={"20px"} />
      </Box>
      {/* banner end */}

      {/* home down section */}

      <Flex
        justifyContent={"space-between"}
        gap={8}
        display={["block", "block", "block", "flex", "flex", "flex"]}>
        <Box
          width={["90%", "90%", "90%", "30%", "35%", "20%"]}
          margin={"auto"}
          mt={"20px"}>
          <Heading
            color={"#333333"}
            ml={"10px"}
            fontSize={"26px"}
            mb={"20px"}
            mt={"10px"}>
            Products For You
          </Heading>
          <Card borderRadius={"8px"}>
            <Accordion fontSize={"15px"} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={19}
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                    borderRadius={"10%"}>
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
                    mt={5}>
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
                    mt={5}>
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
                    mt={5}>
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
                    mt={5}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                      h={"38px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
                          ml={"18px"}>
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
        <Box
          padding={10}
          width={["95%", "95%", "95%", "65%", "65%", "80%"]}
          margin={"auto"}>
          <HomeProducts />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
