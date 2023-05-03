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
} from "@chakra-ui/react";
import { OrdersDetailsModal, ShippingAddressModal } from "./modal";
export default function OrderModal({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mt="4" colorScheme="blue" onClick={onOpen} size={"lg"}>
        {" "}
        view Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Orders</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="xl">
            {data.map((e) => (
              <Stack
                direction="row"
                spacing={4}
                align="center"
                p={2}
                borderWidth={1}
                borderRadius={4}
                borderColor="gray.200">
                <Box flex="0.7" textAlign="center">
                  <span>Date: {e.date}</span>
                </Box>
                <Box flex="1" textAlign="center">
                  <span>Total: Rs. {e.amount}</span>
                  <Box fontSize="lg" color="gray.500">
                    Order ID: {e._id}
                  </Box>
                </Box>

                <OrdersDetailsModal products={e.products} />
                <ShippingAddressModal address={e.address} />
              </Stack>
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
