import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h2>{keg.name}</h2>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;