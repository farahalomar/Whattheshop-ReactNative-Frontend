import instance from "./instance";
import * as actionTypes from "./types";

export const fetchProfile = () => {
  return async dispatch => {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile });
  };
};
