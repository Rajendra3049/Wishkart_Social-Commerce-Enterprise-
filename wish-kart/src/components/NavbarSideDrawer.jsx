import { DragHandleIcon, DownloadIcon, EditIcon } from "@chakra-ui/icons";
import { FaMobileAlt } from "react-icons/fa";
import google from "../images/google.png";
import Appstore from "../images/Appstore.png";
import {
  Popover,
  Text,
  Image,
  Box,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarsideDrawer = () => {
  const navigate = useNavigate();

  const adminhandlepanel = () => {
    navigate("./admin");
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <DragHandleIcon />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {/* -------------------- */}
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Flex align={"center"} gap={"5px"}>
                  <Text fontSize={18}>
                    <DownloadIcon />
                  </Text>
                  <Text
                    color={"black"}
                    fontSize={["8px", "8x", "15px"]}
                    cursor={"pointer"}
                    _hover={{ color: "pink.400" }}>
                    Download App
                  </Text>
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                {/* <PopoverCloseButton /> */}
                <PopoverHeader fontSize={19}>Download From</PopoverHeader>
                <Image src={google} w={"160px"} h={"60px"} ml={"18px"} />
                <Image src={Appstore} w={"163px"} h={"72px"} ml={"18px"} />
              </PopoverContent>
            </Popover>
            <br />
            {/* ------------------------------- */}

            <hr />
            <br />
            <Box
              onClick={adminhandlepanel}
              display={"flex"}
              cursor="pointer"
              alignItem={"center"}
              gap={"5px"}>
              <EditIcon fontSize={"16px"} />
              <Text _hover={{ color: "pink.400" }} fontSize={"15px"}>
                Admin
              </Text>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavbarsideDrawer;
