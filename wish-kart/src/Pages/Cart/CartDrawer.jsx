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

const CartDrawer = () => {
const [count,setCount]=useState(1)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg={"white"}
        _hover={{ bg: "white" }}
      >
        Edit
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base:"xs",md:'sm'}}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={'17px'}>EDIT ITEM</DrawerHeader>
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
                  m={"10px auto"}
                >
                  <Text>Size: Free size</Text>
                  <Flex gap={"10px"} >
                    <Text>Qty:</Text> 
                    <Flex gap={"10px"} borderWidth={"1px"} borderRadius={'5px'} padding={'0 5px'}>
                      <Text onClick={()=>setCount(count-1)} >-</Text>
                      <Text>{count}</Text>
                      <Text onClick={()=>setCount(count+1)}>+</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
             
            </Flex>
            <hr />
            <Flex m={'20px 0'} align={"center"}
                  justifyContent={"space-between"} fontWeight={'600'}>
                <Text>Total Price</Text>
                <Text>₹179</Text>
              </Flex>
            <hr />
          </DrawerBody>

          <DrawerFooter>
        
            <Button m={'10px 0'} colorScheme="pink" padding={{base:"10px 100px",md:'10px 140px',lg:'10px 170px'}}>
              Continue
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
