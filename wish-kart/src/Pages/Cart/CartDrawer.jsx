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
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseCartQty, IncreaseCartQty } from "../../redux/user/user.action";

const CartDrawer = ({ qty, setQty, data }) => {
  const [cartData, setCartData] = React.useState([]);

  // redux start
  let { isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

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
                src={data.productId.images[0]}
              />
              <Box>
                <Text fontSize={"20px"} mt={"10px"}>
                  {data.productId.title}
                </Text>
                <Text m={"10px auto"}>₹ {data.productId.discounted_price}</Text>
                <Grid gap={"25px"} m={"10px auto"}>
                  <Text>Size: {data.productId.sizes[0]}</Text>
                  <Flex gap={"10px"}>
                    <Text>Qty</Text>
                    <Flex
                      gap={"10px"}
                      borderWidth={"1px"}
                      borderRadius={"5px"}
                      padding={"0 5px"}>
                      <Button
                        isDisabled={data.quantity === 1}
                        onClick={() =>
                          dispatch(DecreaseCartQty(data.userId, data._id))
                        }>
                        -
                      </Button>
                      <Text>{data.quantity}</Text>
                      <Button
                        onClick={() =>
                          dispatch(IncreaseCartQty(data.userId, data._id))
                        }>
                        +
                      </Button>
                    </Flex>
                  </Flex>
                </Grid>
              </Box>
            </Flex>
            <hr />
            <Flex
              m={"20px 0"}
              align={"center"}
              justifyContent={"space-between"}
              fontWeight={"600"}>
              <Text>Total Price</Text>
              <Text>₹ {data.productId.discounted_price * data.quantity}</Text>
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
