import {
  Button,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

export function AddProductNotify() {
  const toast = useToast();
  const id = "test-toast";
  return (
    <Text
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Product Added",
            status: "success",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              fontSize: "1.8rem",

              padding: "0.5rem",
              borderRadius: "1rem",
            },
          });
        }
      }}>
      Add New Product
    </Text>
  );
}

export function AddToCartNotify({ present }) {
  const toast = useToast();
  const id = "test-toast";
  return (
    <Text
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Product is added to cart.",
            status: "success",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              fontSize: "1.8rem",
              padding: "0.5rem",
              marginBottom: "2rem",
            },
          });
        }
      }}>
      {present ? "Already Added" : "Add to Cart"}
    </Text>
  );
}

export function RemoveFromCartNotify() {
  const toast = useToast();
  const id = "test-toast";
  return (
    <Text
      fontSize={["14px", "14px", "16px"]}
      marginLeft={"-0.5rem"}
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Removed from Cart",
            status: "success",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              fontSize: "1.8rem",
              padding: "0.5rem",
              marginBottom: "2rem",
            },
          });
        }
      }}>
   
    </Text>
  );
}
export function RemoveProductNotify() {
  const toast = useToast();
  const id = "test-toast";
  return (
    <Text
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Product Removed.",
            status: "success",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              fontSize: "1.8rem",
              padding: "0.5rem",
              marginBottom: "2rem",
            },
          });
        }
      }}>

    </Text>
  );
}

export function CheckOutNotify() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box>
      <Text onClick={onOpen}>Place Your Order</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop={"15rem"}>
          <ModalHeader fontSize={"16px"}>Order Placed Successfully</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={"14px"}>
            Transaction id:{`10002002537595`}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              fontSize={"12px"}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                navigate("/");
              }}
              fontSize={"12px"}>
              Homepage
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
