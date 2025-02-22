import React, { useContext, useEffect } from "react";
import Form from '../Components/Form'
import { DataUsers } from "../Context/DataUsers";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  const { theme } = useContext( DataUsers);
useEffect(() => {
  console.log("renderizando contacto");
}, []);
return (
  <div style={{ background: theme.background, color: theme.color }}>
    <h2 style={{ background: theme.background, color: theme.color }}>
      Want to know more?
    </h2>
    <p>Send us your questions and we will contact you</p>
    <Form />
  </div>
);
};

export default Contact;