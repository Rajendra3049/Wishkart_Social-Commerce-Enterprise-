import { useToast } from "@chakra-ui/react";
import style from "../../styles/otp.module.css";

export function ResendAlert({ setResend }) {
  const toast = useToast();
  return (
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
