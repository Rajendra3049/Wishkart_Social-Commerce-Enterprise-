import { Flex, Text, Card, Button, Box, Image, Grid } from "@chakra-ui/react";
import React from "react";
import "./cart.css";
import CartDrawer from "./CartDrawer";
import { RemoveFromCartNotify } from "../../components/notify";
import { DeleteFromCart, getCart } from "../../redux/user/user.action";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../components/Loader";

const Cart = () => {
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();
  // redux start
  let { cart, loading } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  React.useEffect(() => {
    if (isAuthenticated === false) {
      console.log("user not authenticated");
      navigate("/");
    }
    window.scrollTo(0, 0);
    dispatch(getCart(user.sub));

    if (cart.length > 0) {
      let newPrice = 0;
      for (let i = 0; i < cart.length; i++) {
        newPrice =
          newPrice + cart[i].productId.discounted_price * cart[i].quantity;
      }
      setPrice(newPrice);
    }
  }, [cart.length]);

  const gotoaddress = () => {
    navigate("/address");
  };

  function handleRemove(id) {
    let userId = user.sub;
    let productId = id;
    dispatch(DeleteFromCart(userId, productId));
  }

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else if (cart.length === 0) {
    return <Navigate to="/cartempty" />;
  } else {
    return (
      <>
        <Grid
          gridTemplateColumns={{ base: "100%", md: "70% 30%" }}
          w={{ base: "95%", md: "72%", lg: "88%" }}
          m={"auto"}
          gap={"10px"}
          display={{ base: "row", md: "row", lg: "flex" }}
          alignItems="center"
          marginTop={["100px", "180px", "180px"]}>
          <Grid p="5px" h={"580px"} overflowY="scroll" gap="0px" w="full">
            {cart &&
              cart.map((e, i) => (
                <Box key={e._id} w="100%" border={"0px solid yellow"} p="5px">
                  <Text fontWeight={"600"} fontSize={18}>
                    Cart {i + 1} Item
                  </Text>

                  <Grid
                    border={"0px solid red"}
                    gridTemplateColumns={"20% 75%"}
                    overflow="hidden"
                    variant="outline"
                    gap={"20px"}
                    w={"100%"}
                    borderRadius={"5px 5px 0 0"}>
                    <Box border={"0px solid black"} m="auto">
                      <Image
                        objectFit="cover"
                        m="auto"
                        w="100%"
                        padding={"10px"}
                        src={e.productId.images[0]}
                      />
                    </Box>
                    <Box
                      paddingLeft={["1rem", "1rem", "0rem"]}
                      border={"0px solid green"}>
                      <Box
                        fontSize={["18px", "18px", "20px"]}
                        display="flex"
                        alignItems="center"
                        justifyContent={"space-between"}>
                        <Text fontWeight={"600"}>{e.productId.title}</Text>
                        <Text color={"pink.400"} fontWeight={"600"}>
                          <CartDrawer
                            qty={e.quantity}
                            setQty={setQty}
                            data={e}
                          />
                        </Text>
                      </Box>
                      <Flex
                        gap={"20px"}
                        fontWeight={"550"}
                        fontSize={["13px", "13px", "16px"]}>
                        <Text>Size: {e.productId.sizes[0]}</Text>
                        <Text>Qty: {e.quantity}</Text>
                      </Flex>
                      <Text
                        m={"10px auto"}
                        fontWeight={"500"}
                        fontSize={["13px", "13px", "15px"]}>
                        {"₹"} {e.productId.discounted_price}
                      </Text>
                      <Button
                        color={"pink.400"}
                        gap={"10px"}
                        fontWeight={"600"}
                        bg={"none"}
                        fontSize={["14px", "14px", "16px"]}
                        _hover={{ bg: "none" }}
                        onClick={() => {
                          handleRemove(e._id);
                        }}
                        marginBottom={["20px", "20px", "0px"]}>
                        <i class="fa-solid fa-xmark"></i>
                        <RemoveFromCartNotify />
                      </Button>
                    </Box>
                  </Grid>
                  <Flex
                    borderRadius={"0 0 5px 5px"}
                    borderWidth={"1px"}
                    padding={"15px 5px"}
                    w={"100%"}
                    align={"center"}
                    justifyContent={"space-between"}
                    fontWeight={"500"}
                    color={"gray"}>
                    <Text>Supplier : Today Enterprises</Text>
                    <Text>Free Delivery</Text>
                  </Flex>
                </Box>
              ))}
          </Grid>
          <div>
            <Box
              borderLeft={"2px solid rgb(148, 137, 137)"}
              h={"580px"}
              padding={"10px"}>
              <Text fontWeight={"600"} fontSize={["16px", "16px", "20px"]}>
                Price Details{" "}
              </Text>
              <Flex
                justifyContent={"space-between"}
                fontWeight={"600"}
                color={"gray"}
                m={"20px auto"}>
                <Text fontSize={["10px", "10px", "14px"]}>
                  Total Product Price
                </Text>
                <Text fontSize={["10px", "10px", "14px"]}>
                  {"₹"}
                  {price * qty}
                </Text>
              </Flex>
              <hr />
              <Flex
                justifyContent={"space-between"}
                fontSize={["16px", "16px", "20px"]}
                fontWeight={"600"}
                m={"10px auto"}>
                <Text>Order Total</Text>
                <Text>
                  {"₹"}
                  {price * qty}
                </Text>
              </Flex>

              <Button
                fontSize={"10px"}
                outline={"none"}
                h={"40px"}
                padding={{ base: "0 53px", md: "1px 162px", lg: "1px 69px" }}
                m={"40px auto"}>
                Clicking on 'Continue' will not deduct any money
              </Button>

              <br />

              <Button
                bg={"pink.400"}
                padding={{
                  base: "20px 136px",
                  md: "20px 244px",
                  lg: "20px 149px",
                }}
                color={"white"}
                borderRadius={"5px"}
                m={"15px auto"}
                marginTop={"20px"}
                fontSize="17px"
                _hover={{ bg: "pink.450" }}
                onClick={gotoaddress}>
                Continue
              </Button>
              <Image
                h={"180px"}
                w={{ base: "full", md: "full", lg: "full" }}
                m={"auto"}
                // marginTop={"100px"}
                src={
                  "https://images.meesho.com/images/marketing/1588578650850.webp"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
        </Grid>
      </>
    );
  }
};

export default Cart;
