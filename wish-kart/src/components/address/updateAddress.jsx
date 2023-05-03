import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Input } from "antd";
import React from "react";
export function UpdateAddressComponent({
  formData,
  handleChange,
  handleUpdate,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} size={"md"} fontSize={"14px"}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="xl">
          <ModalHeader>Edit Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleUpdate}>
              <Text fontSize={"25px"}>Select Delivery Address</Text>
              <Box borderWidth={"1px"} padding={"15px"} borderRadius={"5px"}>
                <Flex gap="10px" align={"center"} fontSize={"18px"}>
                  <i className="fa-solid fa-phone"></i>
                  <Text>Contact Details</Text>{" "}
                </Flex>
                <FormControl id="" isRequired>
                  <FormLabel fontSize={"15px"} mt="8px">
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="" isRequired>
                  <FormLabel fontSize={"15px"} mt="8px">
                    Phone number
                  </FormLabel>
                  <Input
                    type="number"
                    name="phone"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormControl>
                <Flex
                  gap={"15px"}
                  align={"center"}
                  fontSize={"18px"}
                  m={"15px 0"}>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <Text>Address</Text>
                </Flex>
                <FormControl id="" isRequired>
                  <FormLabel fontSize={"15px"} mt="8px">
                    House no./Building Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="house_no"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.house_no}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="" isRequired>
                  <FormLabel fontSize={"15px"} mt="8px">
                    Road Name/Area/Colony
                  </FormLabel>
                  <Input
                    type="text"
                    name="road_name"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.road_name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="" isRequired>
                  <FormLabel fontSize={"15px"} mt="8px">
                    Pincode
                  </FormLabel>
                  <Input
                    type="number"
                    name="pincode"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="" isRequired>
                      <FormLabel fontSize={"15px"} mt="8px">
                        City
                      </FormLabel>
                      <Input
                        type="text"
                        fontSize={"14px"}
                        name="city"
                        p="18px 10px"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="">
                      <FormLabel fontSize={"15px"} mt="8px">
                        State
                      </FormLabel>
                      <Input
                        type="text"
                        name="state"
                        fontSize={"14px"}
                        p="18px 10px"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="">
                  <FormLabel fontSize={"15px"} mt="8px">
                    Nearby Location(option)
                  </FormLabel>
                  <Input
                    type="text"
                    name="near_by_location"
                    fontSize={"14px"}
                    p="18px 10px"
                    value={formData.near_by_location}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"pink.400"}
                    type="submit"
                    color={"white"}
                    _hover={{
                      bg: "pink.500",
                    }}
                    p="20px 0"
                    fontSize={"15px"}
                    mt="12px">
                    Save Address & Contiune
                  </Button>
                </Stack>
              </Box>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
