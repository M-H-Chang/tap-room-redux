import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      amount: event.target.amount.value, 
      alcoholContent: event.target.alcoholContent.value, 
      id: v4()
    })
  }


  NewKegForm.propTypes = {
    onNewItemCreation: PropTypes.func
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg"
      />

    </React.Fragment>
  )
}


export default NewKegForm;