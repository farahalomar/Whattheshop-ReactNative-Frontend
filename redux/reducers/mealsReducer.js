import { FETCH_MEALS, FILTER_MEALS } from "../actions/types";

const initialState = {
  meals: [],
  filteredMeals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
        filteredMeals: action.payload
      };
    case FILTER_MEALS:
      return {
        ...state,
        filteredMeals: state.meals.filter(meal => {
          return `${meal.name}`.toLowerCase().includes(action.payload);
        })
      };
    default:
      return state;
  }
};
