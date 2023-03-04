import {
  Box,
  Button,
  Modal,
  ModalBody,
  Text,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import UpdateProduct from "../adminSide/UpdateProductModal";
import "../../styles/update.module.css";
import { FiEdit } from "react-icons/fi";


function Update({ singleData, HandleUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
   
   <Text ml={5} ><FiEdit fontSize={15}  onClick={onOpen}  color={"#fb2175"} /></Text>
      {/* <Button fontSize={"16px"} onClick={onOpen} className="upbtn" m={"5px"}>
        Update
      </Button> */}
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="100px"
        m={'auto'}
        border="2px solid red"
      >
        <ModalOverlay />
        <ModalContent w={700}>
          <ModalHeader textAlign={"center"} fontSize={"18px"}>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateProduct singleData={singleData} onClose={onClose} />
          </ModalBody>


        </ModalContent>
      </Modal>
    </>
  );
}

export default Update;
