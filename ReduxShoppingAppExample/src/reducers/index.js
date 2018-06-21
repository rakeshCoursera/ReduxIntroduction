import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import CartItemReducer from './reducer_cart_item';

export default combineReducers({
  items: ItemsReducer,
  itemIds: CartItemReducer,
});

export const getCartProducts = (state) => {
  if (state.itemIds.length > 0) {
    return state.items.filter(item => state.itemIds.includes(item.id));
  }
  return [];
};
