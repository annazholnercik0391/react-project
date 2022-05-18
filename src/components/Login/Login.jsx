import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"}
          validate={[required]}
          component={Input} />

      </div>
      <div>
        <Field placeholder={"Password"} name={"password"}
          validate={[required]}
          component={Input} />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} />remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginFormRedux = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginFormRedux onSubmit={onSubmit} />
  </div>
}
export default Login