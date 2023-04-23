import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      bg={"#f43397"}
      color={"white"}
      w={"210px"}
      ml={"15px"}
      mt={"10px"}
      h={"45px"}
      fontSize={"17px"}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }>
      Log Out
    </Button>
  );
};

export default LogoutButton;
