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
} from "./user.type";
const initialState = {
  data: [],
  orders: [],
  token: "",
  loading: false,
  error: false,
  isAuth: false,
  admin: {
    email: "",
    username: "",
  },
};

const UserReducer = (state = initialState, { type, payload }) => {
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
        isAuth: true,
        admin: payload.admin,
        token: payload.token,
      };
    }

    case ADMIN_LOGOUT: {
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: {
          email: "",
          username: "",
        },
      };
    }
    case ADMIN_GET_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADMIN_ADD_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADMIN_DELETE_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADMIN_UPDATE_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADMIN_GET_ORDERS: {
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default UserReducer;
