import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import style from "../../styles/otp.module.css";
import Loader from "../Loader";

export function ResendAlert({ setResend }) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 500);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <button
      className={style.otp_btn}
      onClick={() =>
        toast(
          {
            title: "Resend",
            description: "  Your Otp Will Be Auto Filled!",
            status: "success",
            duration: 1500,
            isClosable: true,
            position: "top",
            containerStyle: {
              minWidth: "30rem",
              marginTop: "4rem",
              fontSize: "1.5rem",
              padding: "1rem",
            },
          },
          setResend(true)
        )
      }>
      Resend
    </button>
  );
}
