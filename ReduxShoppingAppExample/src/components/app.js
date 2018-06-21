import React, { Component } from 'react';
import ProductList from '../containers/productList';
import CartItems from '../containers/cartItems';

export default class App extends Component {
  render() {
    return (
      <div>
        <CartItems />
        <ProductList />
      </div>
    );
  }
}
