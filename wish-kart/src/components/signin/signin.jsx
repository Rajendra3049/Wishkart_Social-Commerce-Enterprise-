import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      bg={"#f43397"}
      color={"white"}
      w={"210px"}
      ml={"15px"}
      mt={"10px"}
      h={"45px"}
      fontSize={"17px"}
      onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default LoginButton;
