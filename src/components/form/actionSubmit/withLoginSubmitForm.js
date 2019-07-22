import { withHandlers } from "recompose";
import { API } from "../../../services"
import {Redirect } from 'react-router-dom';
import React from 'react';

const handleSubmit = (props) => {
  API.login(props.username,props.password).then(function (response) {
    // handle success
    if(response.status === 200 && response.statusText === "OK"){
      
      <Redirect to='/home' />
      //props.makeSnackbar("success","user logged in");
    }
  })
  .catch(function (error) {
    // handle error
    //props.makeSnackbar("error when loging", { 
    //  preventDuplicate: true,
    //});
    console.log(error)
  })
}

  const withSubmitForm = withHandlers({
    onSubmit: props => event => {
      event.preventDefault()
      handleSubmit(props)
    },
  });
  
  export default withSubmitForm;