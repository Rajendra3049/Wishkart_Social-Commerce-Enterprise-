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
  //   console.log("in get user data function");
  let user = "";
  let found = false;

  axios
    .get(`https://meesho-database.vercel.app/users`)
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
          id: "",
          mobile_no: input,
          name: "",
          address: {},
          cart: [],
          order: [],
        };

        try {
          axios
            .post(`https://meesho-database.vercel.app/users`, newUser)
            .then((res) => {
              console.log(res.data);
              dispatch({ type: USER_LOGIN, payload: res.data });
            });
        } catch (error) {
          console.log("err in creating new user");
          dispatch({ type: USER_ERROR });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_ERROR });
    });
};
