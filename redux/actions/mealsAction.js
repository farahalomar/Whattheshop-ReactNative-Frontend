import axios from "axios";
//import jwt_decode from "jwt-decode";
//import { AsyncStorage } from "react-native";
import * as actionTypes from "./types";

export const fetchMeals = () => {
  return async dispatch => {
    try {
      //dispatch(setChLoading());
      const res = await axios.get("http://127.0.0.1:8000/api/meals/");
      const meals = res.data;
      dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
    } catch (err) {
      console.error(err);
    }
  };
};

// export const setCoffeeShopsLoading = () => ({
//   type: actionTypes.COFFEESHOPS_LOADING
// });
