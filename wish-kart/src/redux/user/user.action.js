import {
  USER_LOADING,
  USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_ADD_TO_CART,
  USER_DELETE_FROM_CART,
  USER_ADD_NEW_ADDRESS,
  USER_ORDER,
} from "./user.type";

import axios from "axios";

export const Get_Users_Data = (input) => async (dispatch) => {
  let user = "";
  let found = false;

  axios
    .get(`https://meesho-backend-3037.onrender.com/users`)
    .then((res) => {
      let usersData = res.data;
      for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].mobile_no == input) {
          user = usersData[i];
          found = true;
          break;
        }
      }
      if (found == true) {
        console.log("Existing user");

        dispatch({ type: USER_LOGIN, payload: user });
      } else {
        console.log("new User");
        let newUser = {
          id: Date.now(),
          mobile_no: input,
          name: "",
          address: {},
          cart: [],
          order: [],
        };
        CreateNewUser(newUser);
      }
    })
    .catch((error) => {
      console.log("err");
      console.log(error);
      dispatch({ type: USER_ERROR });
    });
  async function CreateNewUser(newUser) {
    let res = await fetch("https://meesho-backend-3037.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    dispatch({ type: USER_LOGIN, payload: user });
  }
};
