import React from "react";
import Form from "../../components/shared/Form/Form";

const Login =() => {
  return (
    <>

<div className="row">
  <div className="col-md-8 form-banner">
    <img src="./assets/images/banner1.jpg" alt="loginimage" />
  </div>
  <div className="col-md-4 form-container">
    <Form formTitle={'Login Page'} submitBtn={'Login'} />
  </div>
</div>

    </>
  )
}