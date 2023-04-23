import {
  USER_LOADING,
  USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_ADD_TO_CART,
  USER_DELETE_FROM_CART,
  USER_ORDER,
  ADMIN_LOGIN,
  USER_GET_CART,
  USER_ADD_NEW_ADDRESS,
  USER_GET_ADDRESS,
  USER_UPDATE_ADDRESS,
  USER_DELETE_ADDRESS,
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

//get admin
export const Get_Admins_Data = (input) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN });
};

// add into cart
export const getCart = (userId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(`https://wishkart-server.onrender.com/user/cart/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      user_id: userId,
    },
  });
  let data = await res.json();
  console.log(data);

  dispatch({ type: USER_GET_CART, payload: data });
};
export const AddToCart = (userId, productId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://wishkart-server.onrender.com/user/cart/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  console.log(data);
  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(`https://wishkart-server.onrender.com/user/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    });
    let data = await res.json();
    console.log(data);

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

export const IncreaseCartQty = (userId, productId) => async (dispatch) => {
  console.log(userId);
  console.log(productId);
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://wishkart-server.onrender.com/user/cart/increase/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  console.log(data);
  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(`https://wishkart-server.onrender.com/user/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    });
    let data = await res.json();
    console.log(data);

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

export const DecreaseCartQty = (userId, productId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://wishkart-server.onrender.com/user/cart/decrease/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  console.log(data);
  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(`https://wishkart-server.onrender.com/user/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    });
    let data = await res.json();
    console.log(data);

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

// delete from cart
export const DeleteFromCart = (userId, productId) => async (dispatch) => {
  await fetch(`https://wishkart-server.onrender.com/user/cart/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      user_id: userId,
    },
  });
  dispatch({ type: USER_DELETE_FROM_CART });

  dispatch({ type: USER_LOADING });

  let res = await fetch(`https://wishkart-server.onrender.com/user/cart/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      user_id: userId,
    },
  });
  let data = await res.json();
  console.log(data);

  dispatch({ type: USER_GET_CART, payload: data });
};

//address

export const GetAddress = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  let res = await fetch(`https://wishkart-server.onrender.com/user/address`);
  let data = await res.json();
  dispatch({ type: USER_GET_ADDRESS, payload: data });
};

export const AddAddress =
  ({ address, userId }) =>
  async (dispatch) => {
    console.log(userId);
    let res = await fetch(`https://wishkart-server.onrender.com/user/address`, {
      method: "POST",
      body: JSON.stringify(address),
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        address: address,
      },
    });
    let data = await res.json();
    console.log(data);
    dispatch({ type: USER_ADD_NEW_ADDRESS });
  };
export const DeleteAddress =
  ({ addressId, userId }) =>
  async (dispatch) => {
    let res = await fetch(
      `https://wishkart-server.onrender.com/user/address${addressId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();

    dispatch({ type: USER_DELETE_ADDRESS });
  };
export const UpdateAddress =
  ({ address, userId }) =>
  async (dispatch) => {
    let id = address._id;
    let res = await fetch(
      `https://wishkart-server.onrender.com/user/address${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
          address: address,
        },
      }
    );
    let data = await res.json();

    dispatch({ type: USER_DELETE_ADDRESS });
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
