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
handleClick = () => {
  if(this.state.selectedKeg != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
    });
  } else {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleonPage,
    }));
  }
};

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
