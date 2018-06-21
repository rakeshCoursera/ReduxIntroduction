/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import Product from './product.jsx';

export default function CartItems(props) {
  const cartItem = props.itemdata.map(value =>
    <Product class="cartItem"
      key={value.id}
      item={value}
      text="Remove from cart"
      clickHandler={props.clickHandler}
    />);
  return (
    <div className="cartProduct">
      {cartItem}
    </div>
  );
}
