import { ADD_CART, SUB_CART } from "./actionType"
const defaultState = JSON.parse(localStorage.getItem('cart') || [])

const cartReducer = (state = defaultState, action) => {

  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case SUB_CART:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default cartReducer;
