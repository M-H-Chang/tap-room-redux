import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm (props) {
  const { keg } = props;
  function handleEditKegFormSubmission (event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      amount: event.target.amount.value, 
      alcoholContent: event.target.alcoholContent.value, 
      id: keg.id
    })
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission
        }
        buttonText= "Edit Keg"
      />
    </React.Fragment>
  )
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;