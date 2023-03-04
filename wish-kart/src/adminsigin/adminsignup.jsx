import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/signup.module.css";
import { useDispatch, useSelector} from "react-redux";
import { Text } from "@chakra-ui/react";

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
      <div className={style.sign_up}>
        <div className={style.main_box}>
          <div className={style.main_top}>
            <img
              className={style.sign_up_img}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt="top box"
            />
          </div>
          <div className={style.main_bottom}>
            <p className={style.heading}>Sign In as Admin</p>
            <div className={style.flex_box}>
              {" "}
              <div>
                <Text fontSize={15}>Email</Text>
                <input
                  type="email"
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    width: "345px",
                  }}
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Text fontSize={15}>Password</Text>
                <input
                  type="pass"
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    width: "345px",
                  }}
                  placeholder="Password"
                  required
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
          
              {/* <div>
                
              </div> */}
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
}