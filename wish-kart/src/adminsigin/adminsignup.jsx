import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import style from "../styles/signup.module.css";
import { useDispatch, useSelector} from "react-redux";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Image ,useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import Loader from "../components/Loader";
import { Get_Admins_Data } from "../redux/user/user.action";


export default function AdminSignUp() {
  let { loading } = useSelector(
    (store) => store.UserManager
  );

  let dispatch = useDispatch();
  // redux end
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const navigate = useNavigate();

  // handle number input

  // handle continue button
  function HandleSubmit() {
    const payload = {
      email,
      pass,
    };

    fetch("https://zany-bikini-bass.cyclic.app/admin/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res), console.log(res));
        if (res.token) {
          dispatch(Get_Admins_Data(email));
          navigate("/admin");
        } else {
          navigate("/adminsignup");
          window.alert("You are not authenticated");
          setEmail("");
          setPass("");
        }
      })
      .catch((err) => console.log(err));
  }


  if (loading) {
    return <Loader />;
  } else {
    return (
     <SimpleGrid  m={"auto"} mt={["65px","","160px"]}  w={"90%"} columns={[1,1,1,2]} border={"0px solid red"}>
      <Flex minH={["75vh","80vh","70vh"]} mt={"0px"} ml={["0px","","","30px"]} border={"0x solid blue"}>
        <Stack spacing={8} mx={"auto"} maxW={["xl","4xl","3xl"]} py={12} px={6} h={["350px","","480px"]} border={"0px solid yellow"}>
          <Stack>
            <Heading fontSize={"4xl"}>Sign in as Admin</Heading>
          </Stack>
          <Box
            // bg={useColorModeValue("white", "gray.700")}
            w={["200px","370px","","400px"]}
            h={["75vh","","","58vh"]}
            m={"auto"}
         border={"0px solid green"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel fontSize={"18px"}>Email address</FormLabel>
                <Input
                w={[180,350,345,358]}
                h={38}
                  type="email"
                  value={email}
                  fontSize={["10px","15px","18px"]}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel fontSize={"18px"}>Password</FormLabel>
                <Input
                     w={[180,350,345,358]}
                    h={38}
                    fontSize={["10px","15px","18px"]}
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"#ff3f6c"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"#ed3595"}
                  h={"35px"}
                  m={"auto"}
                  w={[180,350,345,358]}
                  color={"white"}
                  _hover={{
                    bg: "#ed3595",
                  }}
                  onClick={HandleSubmit}
                  fontSize={["10px","15px","18px"]}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Box mt={["90px","20px","50px"]} m={"auto"}>
        <Image
          src="https://supplier.meesho.com/images/Desktop-Pic.png"
          w={"75%"}
          m={"auto"}
        ></Image>
      </Box>
    </SimpleGrid>
  );
}

  
}
