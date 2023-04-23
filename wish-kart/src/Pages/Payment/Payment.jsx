import {
  Box,
  Text,
  Flex,
  Button,
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
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { OrderPlacement } from "../../redux/user/user.action";
import { CheckOutNotify } from "../../components/notify";
import { useAuth0 } from "@auth0/auth0-react";

const Payment = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const [cardDetail, setCardDetail] = useState("");
  const [checkout, setCheckout] = useState(false);

  const navigate = useNavigate();
  // redux start
  // let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
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
  };

  function HandleCheckOut() {
    console.log("in");
    let userId = user.id;
    let OrderHistory = user.order;
    const NewOrderHistory = OrderHistory.concat(user.cart);
    dispatch(OrderPlacement(NewOrderHistory, userId));
  }

  // const gotoaddress = () => {};

  if (isAuthenticated === false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  } else {
    return (
      <>
        {/* <Navbar2 /> */}
        <Grid
          gridTemplateColumns={{ base: "80%", md: "60% 40%" }}
          w={{ base: "80%", md: "70%", lg: "70%" }}
          margin={{ base: "60px auto", md: "180px auto" }}
          padding={{ base: "10px", md: "", lg: "" }}
          gap={{ base: "10px", md: "10px", lg: "20px" }}>
          <Box>
            <Grid align={"center"} justifyContent={"space-between"}>
              <Text
                fontSize={"20px"}
                fontWeight={"550"}
                mb={"20px"}
                textAlign="left">
                Payment Method
              </Text>{" "}
              <RadioGroup onChange={(e) => handlepayment(e)} value={cardDetail}>
                <Stack direction="row">
                  <Radio value="cash">
                    <Text fontSize={20}>Cash</Text>
                  </Radio>
                  <Radio value="card">
                    <Text fontSize={20}>Card</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
              {/* ==== Card Detail ===== */}
              {cardDetail === "card" ? (
                <form
                  style={{ width: "200%" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCheckout(true);
                  }}>
                  <Card border="1px" borderColor="blue.500" margin="18px 0">
                    <CardHeader>
                      <Heading size="lg"> Card Payment </Heading>
                    </CardHeader>

                    <CardBody>
                      <Stack spacing="4">
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="4px 2px">
                            Card Number
                          </Heading>
                          <Input
                            variant="flushed"
                            type="number"
                            placeholder="Enter Card Number"
                            isRequired
                          />
                        </Box>
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="6px 2px">
                            Evpiration Date
                          </Heading>
                          <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            isRequired
                          />
                        </Box>
                        <Box>
                          <Heading
                            size="md"
                            textTransform="uppercase"
                            textAlign={"left"}
                            margin="6px 2px">
                            C V V
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
                  </Card>
                  <Text fontSize={{ base: "14px" }} textAlign="left">
                    Save Card Details
                  </Text>{" "}
                  {/* <Checkbox colorScheme="green" border={"white"}></Checkbox> */}
                  <Input
                    cursor={"pointer"}
                    fontSize={{ base: "16px" }}
                    bg={"green.100"}
                    _hover={{ bg: "green.100" }}
                    type={"submit"}
                    colorScheme="green"
                    border={"white"}
                  />
                </form>
              ) : cardDetail === "cash" ? (
                <Box
                  style={{
                    width: "200%",
                    marginTop: "20px",
                  }}>
                  {/* <Button
                    w="full"
                    justifyContent={"space-between"}
                    gap={{ base: "110px", md: "372px", lg: "280px" }}
                    padding={"25px 14px"}
                    bg={"green.100"}
                    _hover={{ bg: "green.100" }}
                    mb="10px"
                  >
                    <Text fontSize={{ base: "16px" }}>Cash on Delivery</Text>{" "}
          
                  </Button> */}
                  <Text fontSize={{ base: "16px" }} textAlign="left" mb="10px">
                    Cash on Delivery
                  </Text>
                  <Button
                    w="full"
                    onClick={(e) => {
                      setCheckout(true);
                    }}
                    cursor={"pointer"}
                    fontSize={{ base: "16px" }}
                    bg={"green.400"}
                    colorScheme="green"
                    border={"white"}>
                    Submit
                  </Button>
                </Box>
              ) : null}
            </Grid>
          </Box>

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
              padding={{ base: "1px 17px", md: "1px 95px", lg: "1px 77px" }}
              m={"10px auto"}>
              <Text>
                {cardDetail === ""
                  ? "Please Select Payment Method"
                  : "Clicking on ‘Continue’ will not deduct any money"}
              </Text>
            </Button>

            <br />

            <Box m="auto">
              <Button
                isDisabled={checkout === false}
                fontSize={"15px"}
                bg={"pink.400"}
                padding={{
                  base: "20px 78px",
                  md: "20px 130px",
                  lg: "20px 115px",
                }}
                color={"white"}
                borderRadius={"5px"}
                m={"10px auto"}
                _hover={{ bg: "pink.450" }}
                onClick={HandleCheckOut}>
                <CheckOutNotify checkout={checkout} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </>
    );
  }
};

export default Payment;
