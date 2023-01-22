import { Flex, Text, Card, Button, Box, Image, Grid } from "@chakra-ui/react";
import React from "react";
import "./cart.css";
import CartDrawer from "./CartDrawer";
import { RemoveFromCartNotify } from "../../components/notify";

import { DeleteFromCart } from "../../redux/user/user.action";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);

  // redux start
  let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  React.useEffect(() => {
    console.log("cartData", cartData);
    let newPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      newPrice = newPrice + cartData[i].discounted_price;
    }
    setPrice(newPrice);
    setCartData(user.cart);
  }, [user, cartData]);

  const navigate = useNavigate();

  const gotoaddress = () => {
    navigate("/address");
  };

  function handleRemove(product_id) {
    let userId = user.id;
    let cartData = user.cart;
    let updatedCart = [];
    for (let i = 0; i < cartData.length; i++) {
      console.log(product_id);
      if (cartData[i].id !== product_id) {
        updatedCart.push(cartData[i]);
      }
    }
    console.log("updated", updatedCart);
    dispatch(DeleteFromCart(updatedCart, userId));
  }

  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  } else {
    return (
      <>
        {/* <Navbar2 /> */}
        {/* <div className="cart-section"> */}
        <Box
          // borderWidth={'1px'}
          w={{ base: "95%", md: "72%", lg: "72%" }}
          gap={"10px"}
          margin={"180px auto"}
          display={{ base: "row", md: "row", lg: "flex" }}
          alignItems="center">
          <Grid>
            {cartData &&
              cartData.map((e, i) => (
                <div className="cart-first-section">
                  <div className="cart-fisrt-section-item">
                    <Flex
                      marginBottom={"15px"}
                      marginLeft={"15px"}
                      gap={"10px"}
                      fontWeight={"600"}>
                      <Text>Cart</Text>|<Text>{i + 1} Item</Text>
                    </Flex>
                  </div>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    gap={"15px"}
                    borderRadius={"5px 5px 0 0"}>
                    <Image
                      objectFit="cover"
                      boxSize="90%"
                      w={{ base: "40%", md: "30%", lg: "18%" }}
                      padding={"10px"}
                      src={e.images[0]}
                    />
                    <Box>
                      <Box
                        fontSize={"20px"}
                        display="flex"
                        alignItems="center"
                        justifyContent={"space-between"}
                        // gap={{ base: "0", md: "90px", lg: "200px" }}
                      >
                        <Text fontWeight={"600"}>{e.title}</Text>
                        <Text color={"pink.400"} fontWeight={"600"}>
                          <CartDrawer qty={qty} setQty={setQty} />
                        </Text>
                      </Box>
                      <Flex gap={"20px"} fontWeight={"550"} fontSize="16px">
                        <Text>Size: {e.sizes[0]}</Text>
                        <Text>Qty: {qty}</Text>
                      </Flex>
                      <Text m={"10px auto"} fontWeight={"500"} fontSize="15px">
                        {"₹"} {e.discounted_price}
                      </Text>
                      <Button
                        color={"pink.400"}
                        gap={"10px"}
                        fontWeight={"600"}
                        bg={"none"}
                        fontSize="16px"
                        _hover={{ bg: "none" }}
                        onClick={() => {
                          handleRemove(e.id);
                        }}>
                        <i class="fa-solid fa-xmark"></i>
                        <RemoveFromCartNotify />
                      </Button>
                    </Box>
                  </Card>
                  <Flex
                    borderRadius={"0 0 5px 5px"}
                    borderWidth={"1px"}
                    padding={"15px 5px"}
                    align={"center"}
                    justifyContent={"space-between"}
                    fontWeight={"500"}
                    color={"gray"}>
                    <Text>Supplier : Today Enterprises</Text>
                    <Text>Free Delivery</Text>
                  </Flex>
                </div>
              ))}
          </Grid>
          <div className="cart-second-section">
            <Box borderLeft={"2px solid rgb(148, 137, 137)"} padding={"10px"}>
              <Text fontWeight={"600"} fontSize={"20px"}>
                Price Details{" "}
              </Text>
              <Flex
                justifyContent={"space-between"}
                fontWeight={"600"}
                color={"gray"}
                m={"10px auto"}>
                <Text>Total Product Price</Text>
                <Text>
                  {"₹"}
                  {price * qty}
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
                  {price * qty}
                </Text>
              </Flex>

              <Button
                fontSize={"10px"}
                outline={"none"}
                padding={{ base: "0 53px", md: "1px 162px", lg: "1px 69px" }}
                m={"10px auto"}>
                Clicking on ‘Continue’ will not deduct any money
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
                m={"10px auto"}
                fontSize="17px"
                _hover={{ bg: "pink.450" }}
                onClick={gotoaddress}>
                Continue
              </Button>
            </Box>
            <Image
              h={"120px"}
              w={{ base: "full", md: "full", lg: '"full"' }}
              m={"70px auto"}
              src={
                "https://images.meesho.com/images/marketing/1588578650850.webp"
              }
              objectFit={"cover"}
            />
          </div>
        </Box>
        {/* </div> */}
      </>
    );
  }
};

export default Cart;
