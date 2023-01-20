import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/signup.module.css";
import { useDispatch, useSelector } from "react-redux";

import { Get_Users_Data } from "../redux/user/user.action";

export default function SignUp() {
  // redux start
  let { loading, error, isAuth, user } = useSelector(
    (store) => store.UserManager
  );
  let dispatch = useDispatch();
  // redux end

  const [mobileNumber, setMobileNumber] = React.useState("");
  const navigate = useNavigate();

  // handle number input
  function HandleNumberChange(e) {
    setMobileNumber(e.target.value);
  }

  // handle continue button
  function HandleSubmit() {
    if (mobileNumber.length == 10) {
      dispatch(Get_Users_Data(mobileNumber));
      localStorage.setItem("phone", mobileNumber);
      console.log("Current User", mobileNumber);
      navigate("/otp");
    } else {
      window.alert("Enter Valid Number");
    }
  }

  React.useEffect(() => {
    console.log("user used in useEffect signup", user);
  }, [dispatch]);
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
                value={mobileNumber}
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
