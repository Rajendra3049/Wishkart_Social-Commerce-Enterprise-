import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/signup.module.css";

export default function SignUp() {
  const [number, setNumber] = React.useState("");
  const navigate = useNavigate();

  // handle number input
  function HandleNumberChange(e) {
    setNumber(e.target.value);
  }
  // console.log(number);

  // handle continue button
  function HandleSubmit() {
    if (number.length == 10) {
      localStorage.setItem("phone", number);
      console.log(number);
      navigate("/otp");
    } else {
      window.alert("Enter Valid Number");
    }
  }
  return (
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
          <p className={style.heading}>Sign Up to view your profile</p>
          <div className={style.flex_box}>
            {" "}
            <div>
              <p className={style.country}>Country</p>
              <p className={style.country_code}>IN +91</p>
            </div>
            <div>
              <p className={style.number}>Number</p>
              <input
                className={style.input_box}
                type="number"
                placeholder="Phone Number"
                required
                maxLength="10"
                value={number}
                onChange={HandleNumberChange}
              />
            </div>
          </div>
          <button className={style.continue_btn} onClick={HandleSubmit}>
            Continue
          </button>

          <div className={style.footer}>
            By continuing, you agree to Meesho's{" "}
            <span> Terms & Conditions</span>
            and <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
