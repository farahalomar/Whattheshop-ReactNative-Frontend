import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  counter: 0
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM:
      let NewItem = state.items.find(
        item => payload.name === item.name && payload.price === item.price
      );
      let counter = state.counter + payload.quantity;
      if (NewItem) {
        NewItem.quantity += payload.quantity;
        return {
          ...state,
          items: [...state.items],
          counter: counter
        };
      } else {
        return {
          ...state,
          items: state.items.concat(payload),
          counter: counter
        };
      }

    case actionTypes.REMOVE_ITEM:
      let counter2 = state.counter - payload.quantity;
      return {
        // removes an item from the cart.
        ...state,
        items: state.items.filter(item => item !== payload),
        counter: counter2
      };

    case actionTypes.CHECKOUT:
      return {
        // empties the cart.
        ...state,
        items: [],
        counter: 0
      };

    default:
      return state;
  }
};

export default CartReducer;
