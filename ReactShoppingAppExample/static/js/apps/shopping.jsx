/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import Product from './product.jsx';

export default function ShopItems(props) {
  const product = props.itemdata.map(value =>
    <Product
      class="product"
      key={value.id}
      item={value}
      text="Add to cart"
      clickHandler={props.clickHandler}
    />);
  return (
    <div className="catalog">
      {product}
    </div>
  );
}
