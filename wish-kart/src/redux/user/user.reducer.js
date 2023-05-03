import {
  USER_LOADING,
  USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_ADD_TO_CART,
  USER_DELETE_FROM_CART,
  ADMIN_LOGIN,
  USER_GET_CART,
  USER_ADD_NEW_ADDRESS,
  USER_GET_ADDRESS,
  USER_UPDATE_ADDRESS,
  USER_DELETE_ADDRESS,
  USER_GET_ORDER,
  USER_POST_ORDER,
} from "./user.type";
const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  cart: [],
  address: [],
  order: [],
  user: {
    id: "",
    mobile_no: "",
    name: "",
    address: {},
    cart: [],
    order: [],
  },
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_ERROR: {
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
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: {
          id: "",
          mobile_no: "",
          name: "",
          address: {},
          cart: [],
          order: [],
        },
      };
    }
    case USER_GET_CART: {
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    }

    case USER_ADD_TO_CART: {
      return {
        ...state,
        loading: false,
      };
    }
    case USER_DELETE_FROM_CART: {
      return {
        ...state,
        loading: false,
      };
    }

    case USER_GET_ADDRESS: {
      return {
        ...state,
        loading: false,
        address: payload,
      };
    }
    case USER_ADD_NEW_ADDRESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case USER_UPDATE_ADDRESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case USER_DELETE_ADDRESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case USER_GET_ORDER: {
      return {
        ...state,
        loading: false,
        order: payload,
      };
    }
    case USER_POST_ORDER: {
      return {
        ...state,
        loading: false,
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
