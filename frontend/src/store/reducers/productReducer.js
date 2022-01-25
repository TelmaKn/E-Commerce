import * as actionTypes from "../constants";

export const productListReducer = (
  state = { products: [], loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { products: action.payload, loading: false };

    case actionTypes.PRODUCT_LIST_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true };

    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload, loading: false };

    case actionTypes.PRODUCT_DETAILS_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
