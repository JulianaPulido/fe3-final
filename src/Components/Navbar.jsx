import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { DataUsers } from "../Context/DataUsers";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, changeTheme } = useContext(DataUsers);
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <nav style={{ background: theme.background, color: theme.color, textAlign: "right" }}>
      <Link style={{ background: theme.background, color: theme.color }} to="/home">Home</Link>
      <Link style={{ background: theme.background, color: theme.color }} to="/contacto">Contacto</Link>
      <Link style={{ background: theme.background, color: theme.color }} to="/favs">Destacados</Link>
      {/* FALTAN LOS STYLES Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la lógica para cambiar de Theme con el button */}
      <button onClick={() => changeTheme()}>Change theme</button>
    </nav>
  );
};

export default Navbar;