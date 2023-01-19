import {
  Text,
  FormLabel,
  Box,
  FormControl,
  HStack,
  Input,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./address.css";

function Address() {
const navigate=useNavigate()

   const handlepayment=()=>{
    navigate('/payment')
   }
  return (
    <>
      <Navbar2 />
      <Box
        w={{ base: "", md: "80%", lg: "55%" }}
        margin={"100px auto"}
        fontWeight={550}
        display={{base:'',md:'',lg:'flex'}}
        gap={{base:'',md:'',lg:'15px'}}
      >
        <Box>
          <Text fontSize={"25px"}>Select Delivery Address</Text>
          <Box borderWidth={"1px"} padding={"15px"} borderRadius={"5px"}>
            <Flex gap="10px" align={"center"} fontSize={"18px"}>
              <i className="fa-solid fa-phone"></i>
              <Text>Contact Details</Text>{" "}
            </Flex>
            <FormControl id="" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="" isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input type="number" />
            </FormControl>
            <Flex gap={"15px"} align={"center"} fontSize={"18px"} m={"15px 0"}>
              <i className="fa-solid fa-location-dot"></i> <Text>Address</Text>
            </Flex>
            <FormControl id="" isRequired>
              <FormLabel>House no./Building Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="" isRequired>
              <FormLabel>Road Name/Area/Colony</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="" isRequired>
              <FormLabel>Pincode</FormLabel>
              <Input type="number" />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="">
                  <FormLabel>State</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="" isRequired>
              <FormLabel>Nearby Location(option)</FormLabel>
              <Input type="number" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"pink.400"}
                color={"white"}
                _hover={{
                  bg: "pink.500",
                }}
                onClick={handlepayment}
              >
                Save Address & Contiune
              </Button>
            </Stack>
          </Box>
        </Box>
        {/* ============================= */}
        <Box mt={{base:'',md:'',lg:'28px'}}
        padding={'10px'}>
        
          <Text fontSize={"20px"}>Price Details</Text>
          <Flex
            justifyContent={"space-between"}
            margin={"10px 0"}
            align={"center"}
            gap={'80px'}
          >
            {" "}
            <Text>Total Product Price</Text> <Text>₹371</Text>
          </Flex>
          <hr />
          <Flex
            justifyContent={"space-between"}
            align={"center"}
            margin={"10px 0"}
          >
            {" "}
            <Text>Order Total</Text> <Text>₹371</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Address;
