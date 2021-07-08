import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <h2>{props.name}</h2>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      </div>

    </React.Fragment>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  whenKegClicked: PropTypes.func
}
export default Keg;