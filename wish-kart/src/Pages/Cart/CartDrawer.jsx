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
  // redux start
  let { loading } = useSelector((store) => store.UserManager);
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
        _hover={{ bg: "white" }}
        size={"xl"}>
        Edit
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "xs", md: "lg" }}>
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
              <Box fontSize={"14px"}>
                <Text fontSize={"20px"} mt={"10px"}>
                  {data.productId.title}
                </Text>
                <Text m={"10px auto"} fontWeight={"600"}>
                  ₹ {data.productId.discounted_price} &nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                      textDecoration: "line-through",
                      fontWeight: "400",
                    }}>
                    ₹ {data.productId.original_price}
                  </span>
                </Text>

                <Grid gap={"10px"} m={"10px auto"}>
                  <Text>Size: {data.productId.sizes[0]}</Text>
                  <Flex gap={"10px"} fontSize={"14px"}>
                    <Text>Qty</Text>
                    <Flex gap={"10px"} borderWidth={"1px"} borderRadius={"5px"}>
                      <Button
                        isDisabled={data.quantity === 1}
                        onClick={() =>
                          dispatch(DecreaseCartQty(data.userId, data._id))
                        }>
                        -
                      </Button>
                      <Flex justifyContent="center" alignItems="center">
                        <Text>{data.quantity}</Text>
                      </Flex>
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
              pl="10px"
              pr="10px"
              m={"20px 0"}
              align={"center"}
              justifyContent={"space-between"}
              fontWeight={"600"}
              fontSize={"16px"}>
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
                lg: "20px 160px",
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
