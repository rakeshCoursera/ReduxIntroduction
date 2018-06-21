import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

export default function Layout(props) {
  const { items, className, text, backgroundClass } = props;
  const cartItems = items.map(value =>
    <Product className={className}
      key={value.id}
      item={value}
      text={text}
      clickHandler={props.clickHandler}
    />);
  return (
    <div className={backgroundClass}>
      {cartItems}
    </div>
  );
}

Layout.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
  backgroundClass: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
