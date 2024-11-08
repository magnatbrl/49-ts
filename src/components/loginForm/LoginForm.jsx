import React from "react";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import './loginForm.css'

function LoginForm() {
  return (
      <form className="login-form">
        <MyInput name={"login"} type={"text"} placeholder={"Enter your login"} label={"Login"} />
        <MyInput name={"email"} type={"email"} placeholder={"Enter your email"} label={"Email" }/>
        <MyInput name={"password"} type={"password"} placeholder={"Enter your password"} label={"Password"} />
        <MyButton type={"submit"} text={"Submit"} />
      </form>
  )
}

export default LoginForm;