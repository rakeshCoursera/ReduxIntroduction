import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.itemId];
    case REMOVE_FROM_CART:
      state.splice(state.indexOf(action.itemId), 1);
      return [...state];
    default:
      return state;
  }
}
