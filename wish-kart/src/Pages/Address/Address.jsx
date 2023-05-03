import {
  Text,
  FormLabel,
  Box,
  FormControl,
  HStack,
  Input,
  Flex,
  Stack,
  Button,
  VStack,
  RadioGroup,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddressComponent } from "../../components/address/address";
import "./address.css";

import {
  AddAddress,
  DeleteAddress,
  GetAddress,
} from "../../redux/user/user.action";
import { useAuth0 } from "@auth0/auth0-react";

import AddressList from "../../components/address/addressList";
import Loader from "../../components/Loader";
import { PaymentForm } from "../../components/address/payment";

const initialData = {
  name: "",
  phone: "",
  house_no: "",
  road_name: "",
  pincode: "",
  city: "",
  state: "",
  near_by_location: "",
};

function Address() {
  // redux start
  let { loading, cart, address } = useSelector((store) => store.UserManager);

  const { user, isAuthenticated } = useAuth0();
  let dispatch = useDispatch();
  // redux end

  const [defaultAddress, setDefaultAddress] = React.useState(
    address.length !== 0 ? address[0] : ""
  );
  const [price, setPrice] = React.useState(0);
  const [formData, setFormData] = React.useState(initialData);
  const [showAddress, setShowAddress] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated === false) {
      console.log("user not authenticated");
      navigate("/");
    }
    window.scrollTo(0, 0);
    dispatch(GetAddress(user.sub));
    if (address.length > 0) {
      setDefaultAddress(address[0]);
    }
  }, [address.length]);

  React.useEffect(() => {
    let newPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      newPrice =
        newPrice + cart[i].productId.discounted_price * cart[i].quantity;
    }
    setPrice(newPrice);
  }, [cart.length, user]);

  const handlepayment = (e) => {
    e.preventDefault();

    dispatch(AddAddress({ address: formData, userId: user.sub }));
  };
  const handleDelete = (id) => {
    dispatch(DeleteAddress({ addressId: id, userId: user.sub }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Grid
          w={{ base: "80%", md: "80%", lg: "80%" }}
          margin={"190px auto"}
          gridTemplateColumns={"75% 25%"}
          gap="5">
          <Box>
            <Text
              fontSize={"30px"}
              bgColor={"#f43397"}
              color={"white"}
              padding={"5px"}
              fontWeight={"600"}>
              Delivery Address
            </Text>

            {defaultAddress === "" ? (
              <Box mt="10px">
                <AddressComponent
                  formData={formData}
                  setFormData={setFormData}
                  handlepayment={handlepayment}
                  handleChange={handleChange}
                />
              </Box>
            ) : (
              <Grid
                gridTemplateColumns={"85% 15%"}
                fontSize={"16px"}
                padding={"5px"}
                fontWeight={"600"}>
                <Box
                  align="start"
                  spacing={2}
                  display={showAddress ? "none" : "block"}>
                  <Text>{defaultAddress.name}</Text>
                  <Text>{`${defaultAddress.phone}, ${defaultAddress.house_no}, ${defaultAddress.road_name}, ${defaultAddress.city}, ${defaultAddress.state}, ${defaultAddress.pincode},${defaultAddress.near_by_location}`}</Text>
                </Box>

                <Button
                  display={showAddress ? "none" : "block"}
                  fontSize={"16px"}
                  h="full"
                  onClick={() => {
                    setShowAddress(!showAddress);
                  }}>
                  Change
                </Button>
              </Grid>
            )}

            <Box display={showAddress ? "block" : "none"} w="100%" p="10px">
              {address.map((item) => (
                <AddressList
                  key={item._id}
                  item={item}
                  setDefaultAddress={setDefaultAddress}
                  showAddress={showAddress}
                  setShowAddress={setShowAddress}
                  handleDelete={handleDelete}
                />
              ))}
              <Box mt="10px">
                <AddressComponent
                  formData={formData}
                  setFormData={setFormData}
                  handlepayment={handlepayment}
                  handleChange={handleChange}
                />
              </Box>
            </Box>
          </Box>

          {/* ============================= */}
          <Box>
            <Text
              fontSize={"30px"}
              bgColor={"#f43397"}
              color={"white"}
              padding={"5px"}
              fontWeight={"600"}>
              Price Details
            </Text>
            <Flex
              justifyContent={"space-between"}
              margin={"10px 0"}
              align={"center"}
              gap={"80px"}
              fontSize="18px"
              p="10px">
              {" "}
              <Text>Total Product Price</Text> <Text>₹{price}</Text>
            </Flex>
            <hr />
            <Flex
              justifyContent={"space-between"}
              align={"center"}
              margin={"10px 0"}
              fontSize="18px"
              p="10px">
              {" "}
              <Text>Order Total</Text> <Text>₹{price}</Text>
            </Flex>
          </Box>

          <Box>
            <PaymentForm price={price} defaultAddress={defaultAddress} />
          </Box>
        </Grid>
      </>
    );
  }
}

export default Address;
