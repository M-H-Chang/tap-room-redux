import React from "react";
import NewKegForm from "./NewKegForm.js";
import KegList from "./KegList.js";
import KegDetail from "./KegDetail";

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

handleAddingNewKegToList = (newKeg) => {
  const newMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({
    masterKegList: newMasterKegList,
    formVisibleOnPage: false,
  });
};

handleChangingSelectedKeg = (id) => {
  const selectedKeg = this.state.masterKegList.filter((keg) => keg.id === id)[0];
  this.setState({selectedKeg: selectedKeg});
};

handleDeletingKeg = (id) => {
  const newMasterKegList = this.state.masterKegList.filter((keg) => keg.id !== id);
  this.setState({
    masterKegList: newMasterKegList,
    selectedKeg: null});
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
