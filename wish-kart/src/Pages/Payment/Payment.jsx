import {
  Box,
  Text,
  Flex,
  Button,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Input,
  PinInputField,
  HStack,
  Heading,
  PinInput,
  Stack,
  CardBody,
  CardHeader,
  Card,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Navbar2 from "../../components/Navbar2/Navbar2";

import { useDispatch, useSelector } from "react-redux";
import { OrderPlacement } from "../../redux/user/user.action";
import { CheckOutNotify } from "../../components/notify";

const Payment = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const [cardDetail, setCardDetail] = useState("");

  const navigate = useNavigate();
  // redux start
  let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  React.useEffect(() => {
    let newPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      newPrice = newPrice + cartData[i].discounted_price;
    }
    setPrice(newPrice);
    setCartData(user.cart);
  }, [cartData, user]);


  const handlepayment = (e) => {
    setCardDetail(e);
}


  function HandleCheckOut() {
    console.log("in");
    let userId = user.id;
    let OrderHistory = user.order;
    const NewOrderHistory = OrderHistory.concat(user.cart);
    dispatch(OrderPlacement(NewOrderHistory, userId));
  }

  const gotoaddress = () => {};

  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  } else {
    return (
      <>
        {/* <Navbar2 /> */}
        <Box
          w={{ base: "80%", md: "70%", lg: "70%" }}
          margin={"180px auto"}
          padding={{ base: "10px", md: "", lg: "" }}
          display={{ base: "", md: "", lg: "flex" }}
          gap={{ base: "", md: "", lg: "20px" }}>
          <Box>
            <Flex align={"center"} justifyContent={"space-between"}>
              <Text fontSize={"20px"} fontWeight={"550"} mb={"20px"}>
                Payment Method
              </Text>

    
              <RadioGroup onChange={(e) => handlepayment(e)} value={cardDetail} >
                            <Stack direction='row'>
                                <Radio value='cash' ><Text fontSize={20}>Cash</Text></Radio>
                                <Radio value='card'><Text fontSize={20}>Card</Text></Radio>
                            </Stack>
                        </RadioGroup>

                        {/* ==== Card Detail ===== */}
                        {cardDetail === "card" ? <Card border="1px" borderColor="blue.500" margin="18px 0">
                            <CardHeader>
                                <Heading size="md"> Card Payment </Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack spacing="4">
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="4px 2px"
                                        >
                                            Card Number
                                        </Heading>
                                        <Input
                                            variant="flushed"
                                            type="number"
                                            placeholder="Enter Card Number"
                                        />
                                    </Box>
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="6px 2px"
                                        >
                                            Evpiration Date
                                        </Heading>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            type="datetime-local"
                                        />
                                    </Box>
                                    <Box>
                                        <Heading
                                            size="xs"
                                            textTransform="uppercase"
                                            textAlign={"left"}
                                            margin="6px 2px"
                                        >
                                            CVC code
                                        </Heading>
                                        <HStack>
                                            <PinInput type="alphanumeric">
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                            </PinInput>
                                        </HStack>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card> : ""}






              {/* <Text fontSize={"10px"}>100% SAFE PAYMENT</Text> */}
            </Flex>
            <Flex>
              {/* <Text fontSize={"10px"}>PAY IN CASH</Text> */}
              <hr />
            </Flex>
            <Button
              justifyContent={"space-between"}
              gap={{ base: "110px", md: "372px", lg: "280px" }}
              padding={"25px 14px"}
              bg={"green.100"}
              _hover={{ bg: "green.100" }}>
              <Text fontSize={{ base: "16px" }}>Cash on Delivery</Text>{" "}
              <Checkbox
                colorScheme="green"
                defaultChecked
                border={"white"}></Checkbox>
            </Button>

            {/* --------------------------- */}
            {/* <Box mt={"20px"}>
              <Accordion
                allowToggle
                bg={"white"}
                borderWidth={"1px"}
                borderRadius={"5px"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize={"20px"} fontWeight={"550"}>
                          {" "}
                          Reselling the Order?
                        </Text>
                        <Text fontSize={"12px"}>
                          Click on 'Yes' to add Final Price
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4}>
                    <Text>Cash to be Collected</Text>

                    <Input
                      type="number"
                      border={"none"}
                      borderBottom={"1px pink solid"}
                      _hover={{ bg: "none" }}
                      placeholder="Order Total"
                      mt="10px"
                      color={"pink.500"}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box> */}
          </Box>
          {/* ---------------------------- */}
          <Box padding={"10px"}>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Price Details{" "}
            </Text>
            <Flex
              justifyContent={"space-between"}
              fontWeight={"600"}
              color={"gray"}
              fontSize="13px"
              m={"10px auto"}>
              <Text>Total Product Price</Text>
              <Text>
                {"₹"}
                {price}
              </Text>
            </Flex>
            <hr />
            <Flex
              justifyContent={"space-between"}
              fontSize={"17px"}
              fontWeight={"600"}
              m={"10px auto"}>
              <Text>Order Total</Text>
              <Text>
                {"₹"}
                {price}
              </Text>
            </Flex>

            <Button
              fontSize={"10px"}
              outline={"none"}
              padding={{ base: "1px 17px", md: "1px 145px", lg: "1px 77px" }}
              m={"10px auto"}>
              Clicking on ‘Continue’ will not deduct any money
            </Button>

            <br />

            <Button
              fontSize={"15px"}
              bg={"pink.400"}
              padding={{
                base: "20px 78px",
                md: "20px 205px",
                lg: "20px 140px",
              }}
              color={"white"}
              borderRadius={"5px"}
              m={"10px auto"}
              _hover={{ bg: "pink.450" }}
              onClick={HandleCheckOut}>
              <CheckOutNotify />
            </Button>
          </Box>
        </Box>
      </>
    );
  }
};

export default Payment;









