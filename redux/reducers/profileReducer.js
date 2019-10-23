import { FETCH_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
};
