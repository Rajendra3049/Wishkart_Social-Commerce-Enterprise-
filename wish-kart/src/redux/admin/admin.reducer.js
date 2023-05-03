import {
  ADMIN_LOADING,
  ADMIN_ERROR,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_GET_ALL_PRODUCTS,
  ADMIN_GET_ALL_ORDERS,
  ADMIN_GET_ALL_USERS,
  ADMIN_GET_DASHBOARD,
} from "./admin.type";

let initialQueryParams = {
  page: 1,
  category: "",
  order: "",
  title: "",
};

const initialState = {
  loading: false,
  error: false,
  adminAuth: false,
  token: "",
  dashboard: "",
  products: [],
  query: initialQueryParams,
  pagination: "",
  orders: [],
  users: [],
  admin: {},
};

const AdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADMIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ADMIN_LOGIN: {
      return {
        ...state,
        loading: false,
        adminAuth: true,
        admin: payload.admin,
        token: payload.token,
      };
    }

    case ADMIN_LOGOUT: {
      return {
        ...state,
        loading: false,
        error: false,
        adminAuth: false,
        token: "",
        dashboard: "",
        products: [],
        query: initialQueryParams,
        pagination: "",
        orders: [],
        users: [],
        admin: {},
      };
    }
    case ADMIN_GET_DASHBOARD: {
      return {
        ...state,
        loading: false,
        dashboard: payload,
      };
    }

    case ADMIN_GET_ALL_PRODUCTS: {
      return {
        ...state,
        loading: false,
        products: payload.products,
        pagination: payload.pagination,
      };
    }

    case ADMIN_GET_ALL_ORDERS: {
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    }
    case ADMIN_GET_ALL_USERS: {
      return {
        ...state,
        loading: false,
        users: payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default AdminReducer;
