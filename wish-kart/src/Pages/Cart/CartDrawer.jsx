import React from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartDrawer = ({ qty, setQty }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg={"white"}
        _hover={{ bg: "white" }}>
        Edit
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xs", md: "sm" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"17px"}>EDIT ITEM</DrawerHeader>
          <hr />
          <DrawerBody>
            <Flex>
              <Image
                objectFit="cover"
                boxSize="90%"
                w={{ base: "40%", md: "15%", lg: "34%" }}
                padding={"20px"}
                src={
                  "https://images.meesho.com/images/products/78591203/akim8_512.jpg"
                }
              />
              <Box>
                <Text fontSize={"20px"} mt={"10px"}>
                  Redmi Go Back cover
                </Text>
                <Text m={"10px auto"}>₹2023</Text>
                <Flex
                  align={"center"}
                  justifyContent={"space-between"}
                  gap={"25px"}
                  m={"10px auto"}>
                  <Text>Size: Free size</Text>
                  <Flex gap={"10px"}>
                    <Text>Qty</Text>
                    <Flex
                      gap={"10px"}
                      borderWidth={"1px"}
                      borderRadius={"5px"}
                      padding={"0 5px"}>
                      <Button
                        isDisabled={qty == 1}
                        onClick={() => setQty(qty - 1)}>
                        -
                      </Button>
                      <Text>{qty}</Text>
                      <Button onClick={() => setQty(qty + 1)}>+</Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <hr />
            <Flex
              m={"20px 0"}
              align={"center"}
              justifyContent={"space-between"}
              fontWeight={"600"}>
              <Text>Total Price</Text>
              <Text>₹{parseInt(price) * parseInt(qty)}</Text>
            </Flex>
            <hr />
          </DrawerBody>

          <DrawerFooter>
            <Button
              m={"10px 0"}
              colorScheme="pink"
              padding={{
                base: "20px 50px",
                md: "20px 100px",
                lg: "20px 120px",
              }}
              fontSize="15px">
              Continue
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
