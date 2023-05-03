import { DeleteIcon } from "@chakra-ui/icons";
import { HStack, VStack, Radio, Text, Button, Box } from "@chakra-ui/react";

import { UpdateAddressComponent } from "./updateAddress";
import React from "react";
import { UpdateAddress } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader";

const AddressList = ({
  item,
  setDefaultAddress,
  setShowAddress,
  showAddress,
  handleDelete,
}) => {
  const dispatch = useDispatch();
  let { loading } = useSelector((store) => store.UserManager);
  const { user } = useAuth0();

  const [formData, setFormData] = React.useState(item);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(UpdateAddress({ address: formData, userId: user.sub }));
  };
  if (loading) {
    return <Loader />;
  } else {
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
                setDefaultAddress(item);
                setShowAddress(!showAddress);
              }}>
              Deliver Here
            </Button>
          </VStack>
          <VStack justifyContent={"space-around"} h="100px">
            <UpdateAddressComponent
              formData={formData}
              handleChange={handleChange}
              handleUpdate={handleUpdate}
            />
            <DeleteIcon
              cursor={"pointer"}
              boxSize={8}
              onClick={() => {
                handleDelete(item._id);
              }}
            />
          </VStack>
        </HStack>
        <hr />
      </>
    );
  }
};

export default AddressList;
