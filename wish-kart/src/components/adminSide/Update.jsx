import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import "../../styles/update.module.css";
import UpdateProduct from "../adminSide/UpdateProductModal";

function Update({ singleData, token, query, setQuery }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Text ml={5}>
        <FiEdit fontSize={18} onClick={onOpen} color={"#fb2175"} />
      </Text>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="100px"
        m={"auto"}
        border="2px solid red">
        <ModalOverlay />
        <ModalContent w={700}>
          <ModalHeader textAlign={"center"} fontSize={"18px"}>
            Update Product
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateProduct
              singleData={singleData}
              onClose={onClose}
              token={token}
              query={query}
              setQuery={setQuery}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Update;
