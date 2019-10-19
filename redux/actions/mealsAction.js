import instance from "./instance";
import * as actionTypes from "./types";

export const fetchMeals = () => {
  return async dispatch => {
    try {
      //dispatch(setChLoading());
      const res = await instance.get("meals/");
      const meals = res.data;
      dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const checkoutCart = items => {
  return async dispatch => {
    try {
      let response = await instance.post("checkout/", items);
      // let order = response.data;
      // dispatch({
      //   type: actionTypes.CHECKOUT,
      //   payload: order
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
