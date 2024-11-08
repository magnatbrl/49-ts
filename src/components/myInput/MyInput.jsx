import React from "react";
import './myInput.css'

function MyInput({ name, type = 'text', placeholder = '', label }) {
  return (
    <>
    <div className="my-input">
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </div>
    </>
  )
}

export default MyInput;