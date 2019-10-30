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

export const updateProfile = (profile, history) => {
  return async dispatch => {
    let newprofiledata = {
      user: {
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email
      },
      contact: profile.contact
    };
    const res = await instance.put("profile/", newprofiledata);
    const newprofile = res.data;
    console.log("res(update profile):", profile);
    dispatch({ type: actionTypes.UPDATE_PROFILE, payload: newprofile });
  };
};
