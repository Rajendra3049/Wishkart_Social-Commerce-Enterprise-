import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  ADD_NEW_PRODUCT,
  REMOVE_PRODUCT,
} from "./product.actionTypes";

let initialData = {
  loading: false,
  error: false,
  data: [],
};

const ProductReducer = (state = initialData, { type, payload }) => {
  // console.log(type,payload)

  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADD_NEW_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        loading: false,
        data: [...state.data, payload],
      };
    }
    case GET_PRODUCTS_ERROR: {
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

export default ProductReducer;
