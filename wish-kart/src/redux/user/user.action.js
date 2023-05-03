import {
  USER_ADD_NEW_ADDRESS,
  USER_ADD_TO_CART,
  USER_DELETE_ADDRESS,
  USER_DELETE_FROM_CART,
  USER_ERROR,
  USER_GET_ADDRESS,
  USER_GET_CART,
  USER_GET_ORDER,
  USER_LOADING,
  USER_LOGIN,
} from "./user.type";

import axios from "axios";

// get users

// add into cart
export const getCart = (userId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();

  dispatch({ type: USER_GET_CART, payload: data });
};
export const AddToCart = (userId, productId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();

  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/cart/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

export const IncreaseCartQty = (userId, productId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/increase/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  // console.log(data);
  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/cart/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();
    // console.log(data);

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

export const DecreaseCartQty = (userId, productId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/decrease/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  // console.log(data);
  dispatch({ type: USER_ADD_TO_CART });

  try {
    dispatch({ type: USER_LOADING });
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/cart/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();
    // console.log(data);

    dispatch({ type: USER_GET_CART, payload: data });
  } catch (error) {}
};

// delete from cart
export const DeleteFromCart = (userId, productId) => async (dispatch) => {
  await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  dispatch({ type: USER_DELETE_FROM_CART });

  dispatch({ type: USER_LOADING });

  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/cart/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();

  dispatch({ type: USER_GET_CART, payload: data });
};

//address

export const GetAddress = (userId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/address`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  dispatch({ type: USER_GET_ADDRESS, payload: data });
};

export const AddAddress =
  ({ address, userId }) =>
  async (dispatch) => {
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/address`,
      {
        method: "POST",
        body: JSON.stringify(address),
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
          address: address,
        },
      }
    );
    let data = await res.json();
    // console.log(data);
    dispatch({ type: USER_ADD_NEW_ADDRESS });

    try {
      dispatch({ type: USER_LOADING });
      let res = await fetch(
        `https://zany-erin-alligator-boot.cyclic.app/user/address`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            user_id: userId,
          },
        }
      );
      let data = await res.json();
      dispatch({ type: USER_GET_ADDRESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };
export const DeleteAddress =
  ({ addressId, userId }) =>
  async (dispatch) => {
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/address/${addressId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();
    // console.log(data);

    dispatch({ type: USER_DELETE_ADDRESS });

    try {
      dispatch({ type: USER_LOADING });
      let res = await fetch(
        `https://zany-erin-alligator-boot.cyclic.app/user/address`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            user_id: userId,
          },
        }
      );
      let data = await res.json();
      dispatch({ type: USER_GET_ADDRESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };
export const UpdateAddress =
  ({ address, userId }) =>
  async (dispatch) => {
    let id = address._id;

    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/address/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
        body: JSON.stringify(address),
      }
    );
    let data = await res.json();
    // console.log(data);

    dispatch({ type: USER_DELETE_ADDRESS });
    try {
      dispatch({ type: USER_LOADING });
      let res = await fetch(
        `https://zany-erin-alligator-boot.cyclic.app/user/address`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            user_id: userId,
          },
        }
      );
      let data = await res.json();
      dispatch({ type: USER_GET_ADDRESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };

export const GetOrder = (userId) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  let res = await fetch(
    `https://zany-erin-alligator-boot.cyclic.app/user/order`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
      },
    }
  );
  let data = await res.json();
  dispatch({ type: USER_GET_ORDER, payload: data });
};
export const PlaceOrder =
  ({ userId, address, user, amount }) =>
  async (dispatch) => {
    dispatch({ type: USER_LOADING });
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/user/order`,
      {
        method: "POST",
        body: JSON.stringify({ address, user, amount: parseInt(amount) }),
        headers: {
          "Content-Type": "application/json",
          user_id: userId,
        },
      }
    );
    let data = await res.json();

    // console.log("🚀 ~ file: user.action.js:403 ~ data:", data);

    try {
      dispatch({ type: USER_LOADING });
      let res = await fetch(
        `https://zany-erin-alligator-boot.cyclic.app/user/order`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            user_id: userId,
          },
        }
      );
      let data = await res.json();
      dispatch({ type: USER_GET_ORDER, payload: data });
      dispatch({ type: USER_GET_CART, payload: [] });
    } catch (error) {
      dispatch({ type: USER_ERROR });
    }
  };
