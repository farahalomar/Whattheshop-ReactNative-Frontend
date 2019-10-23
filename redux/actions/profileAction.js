import instance from "./instance";
import * as actionTypes from "./types";

export const fetchProfile = () => {
  return async dispatch => {
    const res = await instance.get("profile/");
    const profile = res.data;
    console.log("PROFILE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:", profile);
    dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile });
  };
};
