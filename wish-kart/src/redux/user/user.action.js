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

// get users
export const Get_Users_Data = (input) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
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
        let newUser = {
          id: input,
          mobile_no: input,
          name: "",
          address: {},
          cart: [],
          order: [],
        };
        console.log("new User", newUser);
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
    dispatch({ type: USER_LOGIN, payload: newUser });
  }
};

// add into cart
export const AddToCart = (cart, id) => async (dispatch) => {
  // console.log(cart, id);
  let res = await fetch(
    `https://meesho-backend-3037.onrender.com/users/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ cart }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  // console.log("after Added", data);
  dispatch({ type: USER_ADD_TO_CART, payload: data.cart });
};

// delete from cart
export const DeleteFromCart = (cart, id) => async (dispatch) => {
  console.log(cart, id);
  let res = await fetch(
    `https://meesho-backend-3037.onrender.com/users/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ cart }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  console.log("deleted data", data);
  dispatch({ type: USER_DELETE_FROM_CART, payload: data });
};

// add address
export const AddAddress = (address, id) => async (dispatch) => {
  console.log("Address in reducer", address, id);
  let res = await fetch(
    `https://meesho-backend-3037.onrender.com/users/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ address }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  // console.log("Address", data);

  dispatch({ type: USER_ADD_NEW_ADDRESS, payload: data });
};

export const OrderPlacement = (order, id) => async (dispatch) => {
  let cart = [];

  let res = await fetch(
    `https://meesho-backend-3037.onrender.com/users/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ order, cart }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  console.log("orderHistory", data);
  dispatch({ type: USER_ORDER, payload: data });
};
