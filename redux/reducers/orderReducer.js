import { FETCH_ORDER } from "../actions/types";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};
