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
} from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar2 from "../../components/Navbar2/Navbar2";
import "./address.css";

import { AddAddress } from "../../redux/user/user.action";

const initialData = {
  user_name: "",
  phone: "",
  house_no: "",
  area: "",
  pincode: "",
  city: "",
  state: "",
  nearby: "",
};

function Address() {
  const [price, setPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const [formData, setFormData] = React.useState(initialData);
  const navigate = useNavigate();

  // redux start
  let { user, isAuth } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end

  React.useEffect(() => {
    let newPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      newPrice = newPrice + cartData[i].discounted_price;
    }
    setPrice(newPrice);
    setCartData(user.cart);
  }, [cartData, user]);
  console.log(price);

  const handlepayment = () => {
    let userId = user.id;

    dispatch(AddAddress(formData, userId));
    navigate("/payment");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  if (isAuth == false) {
    console.log("user not authenticated");
    return <Navigate to="/signup" />;
  } else {
    return (
      <>
        <Navbar2 />
        <Box
          w={{ base: "", md: "80%", lg: "55%" }}
          margin={"100px auto"}
          fontWeight={550}
          display={{ base: "", md: "", lg: "flex" }}
          gap={{ base: "", md: "", lg: "15px" }}>
          <Box>
            <Text fontSize={"25px"}>Select Delivery Address</Text>
            <Box borderWidth={"1px"} padding={"15px"} borderRadius={"5px"}>
              <Flex gap="10px" align={"center"} fontSize={"18px"}>
                <i className="fa-solid fa-phone"></i>
                <Text>Contact Details</Text>{" "}
              </Flex>
              <FormControl id="" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="" isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <Flex
                gap={"15px"}
                align={"center"}
                fontSize={"18px"}
                m={"15px 0"}>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <Text>Address</Text>
              </Flex>
              <FormControl id="" isRequired>
                <FormLabel>House no./Building Name</FormLabel>
                <Input
                  type="text"
                  name="house_no"
                  value={formData.house_no}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="" isRequired>
                <FormLabel>Road Name/Area/Colony</FormLabel>
                <Input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="" isRequired>
                <FormLabel>Pincode</FormLabel>
                <Input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="">
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="" isRequired>
                <FormLabel>Nearby Location(option)</FormLabel>
                <Input
                  type="text"
                  name="nearby"
                  value={formData.nearby}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"pink.400"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                  onClick={handlepayment}>
                  Save Address & Contiune
                </Button>
              </Stack>
            </Box>
          </Box>
          {/* ============================= */}
          <Box mt={{ base: "", md: "", lg: "28px" }} padding={"10px"}>
            <Text fontSize={"20px"}>Price Details</Text>
            <Flex
              justifyContent={"space-between"}
              margin={"10px 0"}
              align={"center"}
              gap={"80px"}>
              {" "}
              <Text>Total Product Price</Text> <Text>₹{price}</Text>
            </Flex>
            <hr />
            <Flex
              justifyContent={"space-between"}
              align={"center"}
              margin={"10px 0"}>
              {" "}
              <Text>Order Total</Text> <Text>₹{price}</Text>
            </Flex>
          </Box>
        </Box>
      </>
    );
  }
}

export default Address;
