import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function fetchItems() {
  const request = axios.get('/items');

  return {
    type: FETCH_ITEMS,
    payload: request,
  };
}

export function addToCart(itemId) {
  return {
    type: ADD_TO_CART,
    itemId,
  };
}

export function removeFromCart(itemId) {
  return {
    type: REMOVE_FROM_CART,
    itemId,
  };
}
