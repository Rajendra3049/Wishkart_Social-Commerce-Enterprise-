import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/admin/admin.action";
import Update from "../adminSide/Update";
import { RemoveProductNotify } from "../notify";

import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function ImageModal({ Images, isOpen, onOpen, onClose }) {
  return (
    <>
      {/* <Button >Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {Images.map((image, i) => (
                <Image key={i} src={image} width="300px" />
              ))}
            </Grid>
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

export default function ProductCard({ singleData, token, query, setQuery }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // redux start

  let dispatch = useDispatch();

  function HandleDelete() {
    dispatch(removeProduct({ token, id: singleData._id }));
    setQuery({ page: 1, order: "#", title: "" });
  }

  return (
    <>
      <HStack
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        }
        alignItems="center"
        justifyContent="space-around"
        fontSize="14px"
        mb="10px"
        p="5px 10px">
        <Box flex="0.5">
          <Image
            onClick={onOpen}
            src={singleData.images[0]}
            alt="product img"
            width="100px"
            height="100px"
          />
          <ImageModal
            Images={singleData.images}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Box>
        <Box flex="1" textAlign="center">
          <Text>
            <b>Title:</b> {singleData.title}
          </Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Text>
            <b>Category:</b> {singleData.category}
          </Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Text>
            <b>Original Price:</b> Rs.{singleData.original_price}
          </Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Text>
            <b>Discounted Price:</b> Rs.{singleData.discounted_price}
          </Text>
        </Box>
        <Box flex="0.1" textAlign="center">
          <MdDelete
            fontSize={19}
            color="#f41cb2"
            onClick={HandleDelete}
            query={query}
            setQuery={setQuery}
          />
        </Box>
        <Box flex="0.1" textAlign="center">
          <Update
            singleData={singleData}
            token={token}
            query={query}
            setQuery={setQuery}
          />
          <RemoveProductNotify />
        </Box>
      </HStack>
    </>
  );
}
