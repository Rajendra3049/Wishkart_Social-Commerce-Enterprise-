import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Stack,
  Grid,
  Image,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/react";

export function OrdersDetailsModal({ products }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="lg" colorScheme="blue" variant="outline" onClick={onOpen}>
        View Order Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="xl">
            {products.map((product) => (
              <Grid
                key={product._id}
                gridTemplateColumns={"10% 90%"}
                gap="5px"
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
                }
                mt="10px">
                <Box p="20px">
                  <Image src={product.images[0]} alt="product img" />
                </Box>
                <HStack justifyContent={"space-around"} fontSize={"14px"}>
                  <Box>
                    <Text>{product.title}</Text>
                    <Text color={"gray.500"}>{product.category}</Text>
                  </Box>
                  <Text>
                    <b>Rating:</b>
                    {product.rating}
                  </Text>
                  <Box textAlign={"center"}>
                    <Text textDecoration={"line-through"} color={"gray.400"}>
                      Rs.{product.original_price}
                    </Text>
                    <Text>Rs.{product.discounted_price}</Text>
                  </Box>

                  <Text>
                    <b> Price: </b>
                    Rs.{product.discounted_price}
                  </Text>
                </HStack>
              </Grid>
            ))}
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
export function ShippingAddressModal({ address }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="lg" colorScheme="green" variant="outline" onClick={onOpen}>
        View Shipping Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shipping Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="xl">
            <HStack
              justifyContent={"space-around"}
              fontSize={"14px"}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
              }>
              <Box>
                <Text>
                  <b>Name: </b>
                  {address.name}
                </Text>
                <Divider />
                <Text>
                  {" "}
                  <b>Phone: </b>
                  {address.phone}
                </Text>
                <Divider />
                <Text>
                  {" "}
                  <b>Pincode: </b>
                  {address.pincode}
                </Text>
              </Box>
              <Box>
                <Text>
                  {" "}
                  <b>House: </b>
                  {address.house_no}
                </Text>
                <Divider />
                <Text>
                  {" "}
                  <b>Road: </b>
                  {address.road_name}
                </Text>
                <Divider />
                <Text>
                  {" "}
                  <b>Near by: </b>
                  {address.near_by_location}
                </Text>
              </Box>
              <Box>
                <Text>
                  {" "}
                  <b>City: </b>
                  {address.city}
                </Text>
                <Divider />
                <Text>
                  {" "}
                  <b>State: </b>
                  {address.state}
                </Text>
              </Box>
            </HStack>
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
