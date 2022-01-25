import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducers;
