import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGIN,
} from "./auth.types";

let initialData = {
  loading: false,
  error: false,
  isAuth: false,
  userNumber: "",
};

const AuthReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_LOGIN: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        userNumber: payload,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loading: false,
        isAuth: false,
        userNumber: "",
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default AuthReducer;
