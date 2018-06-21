import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // for making Http requests

import ShopItems from './shopping.jsx';
import CartItems from './cart.jsx';

// Main class component App
class App extends React.Component {
  constructor(props) {
    super(props);
    // initial states 
    this.state = {
      data: [],
      cart: [],
    };
    // binding the event handlers
    this.onClickAddHandler = this.onClickAddHandler.bind(this);
    this.onClickRemoveHandler = this.onClickRemoveHandler.bind(this);
  }

  // To get the shopping cart related item before the mounting of component App
  componentWillMount() {
    const _this = this;
    axios.get('/items') // get the products related data
      .then((response) => {
        _this.setState({ data: response.data.catalog });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // event handler to add a product in cart
  onClickAddHandler(itemId) {
    const cartCopy = this.state.cart.slice();
    const itemkeys = [];

    // to check, whether item is present in cart
    cartCopy.forEach((element) => {
      itemkeys.push(element.id);
    });

    // add the item in cart without duplicacy
    if (!(itemkeys.includes(itemId))) {
      cartCopy.push(this.state.data.filter(item => item.id === itemId)[0]);
      this.setState({ cart: cartCopy });
    } else {
      console.log('Item Already Present in the Cart');
    }
  }

  // event handler to remove a product in cart
  onClickRemoveHandler(itemId) {
    const cartCopy = this.state.cart.slice();
    const itemIndex = this.state.cart.findIndex(item => item.id === itemId);
    cartCopy.splice(itemIndex, 1);
    this.setState({ cart: cartCopy });
  }

  render() {
    if (this.state.data.length > 0) {
      // to get the price some of cart item
      const total = this.state.cart.reduce((sum, value) => sum + value.price, 0);

      // the render html with defined classes, states and variables
      return (
        <div >
          <div>
            <p className="cartTotal">{`TOTAL: $ ${total}`}</p>
            <CartItems itemdata={this.state.cart} clickHandler = {this.onClickRemoveHandler}/>
          </div>
          <div>
            <h1>Product List</h1>
            <ShopItems itemdata={this.state.data} clickHandler = {this.onClickAddHandler}/>
          </div>
        </div>
      );
    }
    return (<div>{this.state.message}</div>);
  }
}

// render the component in the browser dom node 'app'
ReactDOM.render(<App />, document.getElementById('app'));
