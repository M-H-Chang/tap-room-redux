import React from "react";

class KegControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    }
  }


  render() {
    let currentlyVisibleState = null;
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }

}

export default KegControl;
