import * as actionTypes from "../actions/types";

const initialState = {
  // will be changed !!! I will leave it now ONLY to check ^_^
  items: [
    {
      name: "Machboos",
      describtion: "Chicken with rice",
      quantity: 2
    },
    {
      name: "Pasta",
      describtion: "italian food",
      quantity: 3
    }
  ]
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM:
      let NewItem = state.items.find(
        item =>
          payload.name === item.name && payload.describtion === item.describtion
      );

      if (NewItem) {
        NewItem.quantity += payload.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(payload)
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        // removes an item from the cart.
        ...state,
        items: state.items.filter(item => item !== payload)
      };

    case actionTypes.CHECKOUT:
      return {
        // empties the cart.
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default CartReducer;
