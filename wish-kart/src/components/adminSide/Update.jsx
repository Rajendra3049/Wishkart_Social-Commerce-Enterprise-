import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import UpdateProduct from "../adminSide/UpdateProductModal"
import  "../../styles/update.css";

function Update({singleData,HandleUpdate}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    return (
      <>
       

        <Button  fontSize={"16px"} onClick={onOpen}  className="upbtn" m={"5px"}>
         Update
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}  size="600px" border="2px solid red">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UpdateProduct singleData={singleData} onClose={onClose} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default  Update