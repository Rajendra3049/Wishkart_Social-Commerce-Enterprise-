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
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Navbar2 from "../../components/Navbar2/Navbar2";

const Payment = () => {
  const navigate = useNavigate();

  const gotoaddress = () => {};
  return (
    <>
    <Navbar2/>
      <Box
        w={{ base: "80%", md: "70%", lg: "70%" }}
        margin={"100px auto"}
        padding={{ base: "10px", md: "", lg: "" }}
        display={{ base: "", md: "", lg: "flex" }}
        gap={{ base: "", md: "", lg: "20px" }}
      >
        <Box>
          <Flex align={"center"} justifyContent={"space-between"}>
            <Text fontSize={"20px"} fontWeight={"550"} mb={"20px"}>
              Payment Method
            </Text>
            <Text fontSize={"10px"}>100% SAFE PAYMENT</Text>
          </Flex>
          <Flex>
            <Text fontSize={"10px"}>PAY IN CASH</Text>
            <hr />
          </Flex>
          <Button
            justifyContent={"space-between"}
            gap={{ base: "110px", md: "420px", lg: "280px" }}
            padding={"25px 14px"}
            bg={"green.100"}
            _hover={{ bg: "green.100" }}
          >
            <Text>Cash on Delivery</Text>{" "}
            <Checkbox
              colorScheme="green"
              defaultChecked
              border={"white"}
            ></Checkbox>
          </Button>

          {/* --------------------------- */}
          <Box mt={"20px"}>
            <Accordion
              allowToggle
              bg={"white"}
              borderWidth={"1px"}
              borderRadius={"5px"}
            >
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
          </Box>
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
            m={"10px auto"}
          >
            <Text>Total Product Price</Text>
            <Text>{"₹"}179</Text>
          </Flex>
          <hr />
          <Flex
            justifyContent={"space-between"}
            fontSize={"17px"}
            fontWeight={"600"}
            m={"10px auto"}
          >
            <Text>Order Total</Text>
            <Text>{"₹"}179</Text>
          </Flex>

          <Button
            fontSize={"10px"}
            outline={"none"}
            padding={{ base: "1px 28px", md: "1px 182px", lg: "1px 69px" }}
            m={"10px auto"}
          >
            Clicking on ‘Continue’ will not deduct any money
          </Button>

          <br />

          <Button
            bg={"pink.400"}
            padding={{ base: "1px 105px", md: "1px 260px", lg: "1px 147px" }}
            color={"white"}
            borderRadius={"5px"}
            m={"10px auto"}
            _hover={{ bg: "pink.450" }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
