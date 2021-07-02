import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <h2>props.name</h2>
      <h3>props.brand</h3>
      <h3>props.price</h3>
      <h3>props.amount</h3>
      <h3>props.alcoholContent</h3>
      </div>

    </React.Fragment>
  )
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
}
export default Keg;