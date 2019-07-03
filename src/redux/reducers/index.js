import { combineReducers } from "redux";
import cars from "./car_reducers";
const rootReducer = combineReducers({
  cars
});

export default rootReducer;
