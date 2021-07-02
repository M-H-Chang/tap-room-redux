import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegDetails(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.FragMent>
      <h2>{keg.name}</h2>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.amount}</p>
      <button onClick={props.onClickingDelete(keg.id)}>Delete Keg</button>
    </React.FragMent>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetails;