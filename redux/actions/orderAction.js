import instance from "./instance";
import * as actionTypes from "./types";

export const fetchOrder = () => {
  return async dispatch => {
    try {
      const res = await instance.get("profile/");
      const order = res.data;
      dispatch({ type: actionTypes.FETCH_ORDER, payload: order });
    } catch (err) {
      console.error(err);
    }
  };
};
