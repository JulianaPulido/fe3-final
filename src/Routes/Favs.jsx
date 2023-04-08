import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { DataUsers } from "../Context/DataUsers";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(DataUsers);
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const favs = [];
    const favsLocalStorage = localStorage.getItem("favs");
    if (favsLocalStorage) {
      favs.push(...JSON.parse(favsLocalStorage));
    }
    setFavs(favs);
  }, []);

  return (
    <>
      <h1 style={{ background: theme.background, color: theme.color }}>
        Dentists Favs
      </h1>
      <div
        style={{ background: theme.background, color: theme.color }}
        className="card-grid"
      >
        {favs.map((fav) => (
          <Card
            style={{ background: theme.background, color: theme.color }}
            key={fav.id}
            {...fav}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
