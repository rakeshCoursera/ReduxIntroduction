import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems, addToCart } from '../actions/index';
import Catalog from '../components/layout';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onClickAddHandler = this.onClickAddHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems();
  }

   // event handler to add a product in cart
  onClickAddHandler(itemId) {
    if (!this.props.itemIds.includes(itemId)) {
      this.props.addToCart(itemId);
    }
  }

  render() {
    const { items } = this.props;
    if (!items) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <h2>Product List</h2>
        <Catalog items={items} className="product" backgroundClass="layout" text="Add to Cart" clickHandler = {this.onClickAddHandler}/>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  itemIds: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { items: state.items, itemIds: state.itemIds };
}

export default connect(mapStateToProps, { fetchItems, addToCart })(ProductList);
