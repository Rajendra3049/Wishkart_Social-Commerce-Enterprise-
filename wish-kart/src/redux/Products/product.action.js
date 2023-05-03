import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  ADD_NEW_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./product.actionTypes.js";
import axios from "axios";

export const getProducts = async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get(
      "https://zany-erin-alligator-boot.cyclic.app/products"
    );

    // console.log(res.data)

    function shuffleArray(array) {
      const newArray = [...array];
      newArray.sort(() => Math.random() - 0.5);
      return newArray;
    }
    const shuffledData = shuffleArray(res.data.products);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: shuffledData });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};
