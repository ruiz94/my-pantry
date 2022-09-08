import { combineReducers } from "redux";
import currentShoppingList from "./currentShoppingList";
import permits from "./permits";

const rootReducer = combineReducers({
  currentShoppingList,
  permits,
});

export default rootReducer;
