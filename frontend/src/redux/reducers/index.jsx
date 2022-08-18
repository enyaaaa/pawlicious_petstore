import { combineReducers } from "redux";
import products from './products';
import cartReducer from "./cartRedux";

export default combineReducers({
     products: products,
     cart: cartReducer
});