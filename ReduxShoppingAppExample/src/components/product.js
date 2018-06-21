import React from 'react';
import PropTypes from 'prop-types';

// A functional component which is being called by class component App
// contains some set of html + button + event
export default function Product(props) {
  const { item, className, text } = props;
  return (
   <div className={className}>
    <img src={item.imageURL} />
    <div className="itemInfo">
      <h4>{item.name}</h4>
      <h4>{`${item.currency}${item.price}`}</h4>
    </div>
    <div className="itemAddRemove">
      <button onClick={() => { props.clickHandler(item.id); }}>{text}</button>
    </div>
  </div>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
