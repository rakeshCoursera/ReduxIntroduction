/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

// A functional component which is being called by class component App
// contains some set of html + button + event
export default function Product(props) {
  return (<div className={props.class}>
    <img src={props.item.imageURL} />
    <div className="itemInfo">
      <h4>{props.item.name}</h4>
      <h4>{`${props.item.currency}${props.item.price}`}</h4>
    </div>
    <div className="itemAdd">
      <button onClick={() => { props.clickHandler(props.item.id); }}>{props.text}</button>
    </div>
  </div>);
}

