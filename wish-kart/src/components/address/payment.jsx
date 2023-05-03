import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGooglePay, FaPhone, FaWallet } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { SiPaytm } from "react-icons/si";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import React from "react";
import { GetOrder, PlaceOrder } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

export const PaymentForm = ({ price, defaultAddress }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { loading, order } = useSelector((store) => store.UserManager);

  const { user } = useAuth0();
  const [paymentMethod, setPaymentMethod] = React.useState("card");
  const [formData, setFormData] = React.useState({});
  const handleRadioChange = (value) => {
    setFormData({});
    setPaymentMethod(value);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      PlaceOrder({
        userId: user.sub,
        user,
        amount: price,
        address: defaultAddress,
      })
    )
      .then(() => {
        window.alert("Order Placed successfully");
        navigate("/order");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box w="full" p={4}>
        <Text
          fontSize={"30px"}
          bgColor={"#f43397"}
          color={"white"}
          padding={"5px"}
          fontWeight={"600"}>
          Payment Options
        </Text>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          mt="15px"
          mb="20px">
          <RadioGroup defaultValue={paymentMethod}>
            <Stack direction="row" spacing={6}>
              <Radio
                value="cash"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={FcMoneyTransfer} boxSize={8} />
              </Radio>
              <Box>
                <Text fontWeight="bold" fontSize="xl">
                  Cash
                </Text>
                <Text fontSize="md" color="gray.500">
                  Pay with Cash
                </Text>
              </Box>

              <Radio
                value="card"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={BsFillCreditCard2BackFill} boxSize={8} />
              </Radio>
              <Box>
                <Text fontWeight="bold" fontSize="xl">
                  Card
                </Text>
                <Text fontSize="md" color="gray.500">
                  Pay using Card
                </Text>
              </Box>

              <Radio
                value="googlepay"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={FaGooglePay} boxSize={10} />
              </Radio>
              <Box>
                <Text fontWeight="bold">Google Pay</Text>
                <Text fontSize="sm" color="gray.500">
                  Pay with Google Pay
                </Text>
              </Box>

              <Radio
                value="phonepe"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={FaPhone} boxSize={8} />
              </Radio>
              <Box>
                <Text fontWeight="bold">PhonePe</Text>
                <Text fontSize="sm" color="gray.500">
                  Pay with PhonePe
                </Text>
              </Box>

              <Radio
                value="paytm"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={SiPaytm} boxSize={10} />
              </Radio>
              <Box>
                <Text fontWeight="bold">Paytm</Text>
                <Text fontSize="sm" color="gray.500">
                  Pay with Paytm
                </Text>
              </Box>

              <Radio
                value="wallet"
                onChange={(e) => handleRadioChange(e.target.value)}>
                <Icon as={FaWallet} boxSize={8} />
              </Radio>
              <Box>
                <Text fontWeight="bold">Wallet</Text>
                <Text fontSize="sm" color="gray.500">
                  Pay with Wallet
                </Text>
              </Box>
            </Stack>
          </RadioGroup>
        </Stack>

        <Box>
          <Text
            fontSize={"18px"}
            bgColor={"#48BB78"}
            color={"white"}
            padding={"5px"}
            fontWeight={"600"}>
            Payment Details
          </Text>
          {paymentMethod === "card" ? (
            <Stack
              spacing={4}
              direction={{ base: "column", md: "row" }}
              mt="20px">
              <form onSubmit={handleSubmit}>
                <FormControl id="card-number" isRequired>
                  <FormLabel fontSize={"xl"}>Card Number</FormLabel>
                  <Input
                    type="text"
                    name="card"
                    placeholder="1234 5678 9012 3456"
                    onInput={handleChange}
                    maxLength={16}
                    minLength={16}
                  />

                  <FormLabel fontSize={"xl"}>Expiry Date</FormLabel>
                  <Input
                    type="date"
                    name="date"
                    placeholder="MM/YY"
                    onInput={handleChange}
                  />

                  <FormLabel fontSize={"xl"}>CVV</FormLabel>
                  <Input
                    type="password"
                    name="cvv"
                    placeholder="***"
                    maxLength={3}
                    minLength={3}
                    onInput={handleChange}
                  />
                  <Flex justify="flex-end" mt={8}>
                    <Button type="submit" colorScheme="blue" size="lg">
                      Pay Now
                    </Button>
                  </Flex>
                </FormControl>
              </form>
            </Stack>
          ) : paymentMethod === "cash" ? (
            <Flex justify="flex-end" mt={8}>
              <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
                Pay Now
              </Button>
            </Flex>
          ) : (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="4"
              mt="20px">
              <form onSubmit={handleSubmit}>
                <FormControl id="amount" isRequired>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    name="amount"
                    onInput={handleChange}
                  />

                  <FormLabel>UPI ID</FormLabel>
                  <Input
                    type="email"
                    placeholder={`Enter ${paymentMethod} UPI ID`}
                    name="upi"
                    onInput={handleChange}
                  />

                  <FormLabel>Remark</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter remark"
                    name="remark"
                    onInput={handleChange}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme={
                    paymentMethod === "paytm"
                      ? "blue"
                      : paymentMethod === "phonepe"
                      ? "purple"
                      : "green"
                  }
                  mt="4"
                  w="100%">
                  Pay with {paymentMethod}
                </Button>
              </form>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
};
