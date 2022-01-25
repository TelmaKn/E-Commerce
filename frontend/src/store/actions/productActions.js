import axios from "axios";
import * as actionTypes from "../constants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
