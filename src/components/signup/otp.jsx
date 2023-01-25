import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "../../styles/otp.module.css";
import Loader from "../Loader";
import { ResendAlert } from "./AutoFilledAlert";

export const Otp = () => {
  const [otpIs, setOtp] = useState([]);
  const [resend, setResend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setOtp(otp);
    setResend(false);
  }, [resend]);

  // loading

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 500);
  }, []);

  let navigate = useNavigate();
  //   number access
  var number = localStorage.getItem("phone");

  if (!number) {
    return <Navigate to="/signup" />;
  }

  //   otp generate
  const otp = new Array(6).fill(0).map(() => Math.floor(Math.random() * 10));

  // redirect to homepage

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={style.sign_up}>
        <div className={style.main_box}>
          <div className={style.main_top}>
            <img
              className={style.sign_up_img}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt="top box image"
            />
          </div>
          <div className={style.main_bottom}>
            <div className={style.sign_up_profile}>
              Enter OTP sent to {localStorage.getItem("phone")}
              <br />
              <p
                className={style.change_Number}
                onClick={() => navigate("/signup")}>
                Change Number
              </p>
            </div>
            <div className={style.otp_box}>
              {otpIs.map((e) => {
                return (
                  <input
                    readOnly
                    key={Math.random()}
                    type="text"
                    className={style.otp_input}
                    value={e}
                  />
                );
              })}
            </div>

            <button onClick={() => navigate("/")} className={style.otp_btn}>
              Verify
            </button>
            <ResendAlert setResend={setResend} />
          </div>
        </div>
      </div>
    </>
  );
};
