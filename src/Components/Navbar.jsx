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
    <nav>
      {/* FALTAN LOS STYLES Aqui deberan agregar los links correspondientes a las rutas definidas */}
        
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/favs">Destacados</Link>
          </li>
        </ul>
      {/* Deberan implementar ademas la lógica para cambiar de Theme con el button */}
      <button onClick={() => changeTheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar