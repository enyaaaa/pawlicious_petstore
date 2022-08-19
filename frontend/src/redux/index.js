import { combineReducers } from "redux";
import cartReducer from "./cartRedux";

export default combineReducers({
     cart: cartReducer
});