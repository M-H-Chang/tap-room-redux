import React from "react";
import Keg from "./Keg.js"
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}
          />
      ))}
    </React.Fragment>
  )
}

export default KegList;