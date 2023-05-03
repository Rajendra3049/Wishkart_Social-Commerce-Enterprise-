import {
  ADMIN_LOADING,
  ADMIN_ERROR,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_GET_ALL_PRODUCTS,
  ADMIN_GET_DASHBOARD,
  ADMIN_ADD_PRODUCT,
  ADMIN_GET_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
  ADMIN_DELETE_PRODUCT,
  ADMIN_GET_ALL_ORDERS,
  ADMIN_GET_ALL_USERS,
} from "./admin.type";

import axios from "axios";

// get users
export const adminLogin =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: ADMIN_LOADING });
    await fetch("https://zany-erin-alligator-boot.cyclic.app/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        dispatch({
          type: ADMIN_LOGIN,
          payload: { token: res.token, admin: res.admin[0] },
        });
      })
      .catch((err) => console.log(err));
  };
export const GetAdminData =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: ADMIN_LOADING });
    await fetch("https://zany-erin-alligator-boot.cyclic.app/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        dispatch({
          type: ADMIN_LOGIN,
          payload: { token: res.token, admin: res.admin[0] },
        });
      })
      .catch((err) => console.log(err));
  };

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: ADMIN_LOGOUT });
};

export const adminGetDashboard = (token) => async (dispatch) => {
  await fetch("https://zany-erin-alligator-boot.cyclic.app/admin/dashboard", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: ADMIN_GET_DASHBOARD,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const adminGetProducts =
  ({ token, query }) =>
  async (dispatch) => {
    dispatch({ type: ADMIN_LOADING });
    let url = `https://zany-erin-alligator-boot.cyclic.app/admin/products?page=${
      query.page === undefined ? 1 : query.page
    }&`;

    if (query) {
      if (query.category !== "#") {
        url += `category=${query.category}&`;
      }
      if (query.title !== "") {
        url += `title=${query.title}&`;
      }
      if (query.order !== "#") {
        url += `order=${query.order}&`;
      }
    }

    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    let data = await res.json();

    if (data.msg === "Not Found") {
      dispatch({
        type: ADMIN_GET_ALL_PRODUCTS,
        payload: { products: [], pagination: {} },
      });
    } else {
      dispatch({ type: ADMIN_GET_ALL_PRODUCTS, payload: data });
    }
  };
export const adminGetOrders = (token) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });

  let res = await fetch(
    "https://zany-erin-alligator-boot.cyclic.app/admin/orders",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  let data = await res.json();
  console.log("orders", data);
  dispatch({ type: ADMIN_GET_ALL_ORDERS, payload: data });
};

export const addNewProduct =
  ({ token, state }) =>
  async (dispatch) => {
    await fetch("https://zany-erin-alligator-boot.cyclic.app/admin/products", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(async () => {
        let query = { page: 1, category: "#", order: "#", title: "" };
        dispatch(adminGetProducts({ token, query }));
      });
  };

export const removeProduct =
  ({ token, id }) =>
  async (dispatch) => {
    let res = await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/admin/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(async () => {
        let query = { page: 1, category: "#", order: "#", title: "" };
        dispatch(adminGetProducts({ token, query }));
      });
  };

export const updateProduct =
  ({ token, id, data }) =>
  async (dispatch) => {
    await fetch(
      `https://zany-erin-alligator-boot.cyclic.app/admin/products/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(async () => {
        let query = { page: 1, category: "#", order: "#", title: "" };
        dispatch(adminGetProducts({ token, query }));
      });
  };
