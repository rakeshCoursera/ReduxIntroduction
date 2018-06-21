import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCartProducts } from '../reducers';
import { removeFromCart } from '../actions/index';
import Cart from '../components/layout';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.onClickRemoveHandler = this.onClickRemoveHandler.bind(this);
  }

  onClickRemoveHandler(itemId) {
    this.props.removeFromCart(itemId);
  }

  render() {
    const { cart } = this.props;

    const total = cart.reduce((sum, value) => sum + value.price, 0);

    if (cart.length < 1) {
      return (<div>Add a item in cart from the product list.</div>);
    }

    return (
      <div>
        <h2>Cart </h2>
        <p className="cartTotal">{`TOTAL: $ ${total}`}</p>
        <Cart items={cart} className="cartItem" backgroundClass="cartProduct" text="Remove from cart" clickHandler = {this.onClickRemoveHandler} />
      </div>
    );
  }
}

CartItems.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { cart: getCartProducts(state) };
}

export default connect(mapStateToProps, { removeFromCart })(CartItems);
