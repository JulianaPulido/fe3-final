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

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default Form;
