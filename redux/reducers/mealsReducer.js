import { FETCH_MEALS } from "../actions/types";

const initialState = {
  meals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload
      };
    default:
      return state;
  }
};
