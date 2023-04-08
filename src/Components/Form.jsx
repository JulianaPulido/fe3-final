import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')

  const handleChangeName = (e) => {
    console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      alert(`Gracias ${name}, Revisa tu correo ${email}`);
    } else {
      alert("Por favor, asegurese que su información sea la correcta");
    }
  };
  const nameValidation = () => {
    if (name.length > 6) {
      return true;
    } else {
      return false;
    }
  };
  const emailValidation = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  const formValidation = () => {
    if (nameValidation() && emailValidation()) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="name"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
