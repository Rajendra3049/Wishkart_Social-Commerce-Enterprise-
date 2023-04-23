import {
  ADMIN_LOADING,
  ADMIN_ERROR,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_GET_PRODUCT,
  ADMIN_ADD_PRODUCT,
  ADMIN_DELETE_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
  ADMIN_GET_ORDERS,
} from "./product.actionTypes.js";
import axios from "axios";

export const adminLogin = (credentials) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    const { email, pass } = credentials;
    const payload = {
      email,
      password: pass,
    };

    let res = await axios
      .post("https://wishkart-server.onrender.com/admin/login")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res), console.log(res));
        dispatch({ type: ADMIN_LOGIN, payload: res.data });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const adminLogout = async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    localStorage.removeItem("token");
    dispatch({ type: ADMIN_LOGOUT });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const getProducts = async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await axios.get("https://wishkart-server.onrender.com/products");
    dispatch({ type: ADMIN_GET_PRODUCT, payload: res.data.products });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const addNewProduct = (state) => async (dispatch) => {
  await fetch("https://wishkart-server.onrender.com/products", {
    method: "POST",
    body: JSON.stringify(state),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let res = await axios.get("https://wishkart-server.onrender.com/products");

    dispatch({ type: ADMIN_GET_PRODUCT, payload: res.data.products });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const removeProduct = (id) => async (dispatch) => {
  await fetch(`https://wishkart-server.onrender.com/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let res = await axios.get("https://wishkart-server.onrender.com/products");

    dispatch({ type: ADMIN_GET_PRODUCT, payload: res.data.products });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  await fetch(`https://wishkart-server.onrender.com/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let res = await axios.get("https://wishkart-server.onrender.com/products");

    dispatch({ type: ADMIN_GET_PRODUCT, payload: res.data.products });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};

export const getOrders = async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await axios.get(
      "https://wishkart-server.onrender.com/admin/orders"
    );
    dispatch({ type: ADMIN_GET_PRODUCT, payload: res.data.orders });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR, payload: error.message });
  }
};
