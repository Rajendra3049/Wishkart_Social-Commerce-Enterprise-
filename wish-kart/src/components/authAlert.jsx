import { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function CustomAlert({ message, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Alert</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default function showAlert(message) {
  return new Promise((resolve) => {
    const handleClose = () => {
      resolve();
    };
    ReactDOM.render(
      <CustomAlert message={message} onClose={handleClose} />,
      document.getElementById("modal-root")
    );
  });
}
