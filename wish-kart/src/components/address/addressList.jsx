import { HStack, VStack, Radio, Text, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const AddressList = ({
  item,
  setDefaultAddress,
  setShowAddress,
  showAddress,
}) => {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <VStack align="start" spacing={2} mb="10px">
          <Text fontWeight="bold" fontSize={"16px"}>
            {" "}
            {`${item.name}, Phone: ${item.phone}`}
          </Text>
          <Text fontSize={"16px"}>
            {` Address: ${item.house_no}, ${item.road_name}, ${item.city}, ${item.state}, ${item.pincode}, ${item.near_by_location}
          `}
          </Text>
          <Button
            size={"lg"}
            fontSize={"15px"}
            bgColor={"#f43397"}
            color={"white"}
            onClick={() => {
              console.log(item);
              setDefaultAddress(item);
              setShowAddress(!showAddress);
            }}>
            Deliver Here
          </Button>
        </VStack>
        <Button size={"md"} fontSize={"14px"}>
          Edit
        </Button>
      </HStack>
      <hr />
    </>
  );
};

export default AddressList;
