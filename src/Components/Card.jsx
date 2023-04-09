import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataUsers } from "../Context/DataUsers";


const Card = ({ name, username, id }) => {
  const { theme } = useContext(DataUsers);

  const [fav, setFav] = React.useState(false);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...favs, { name, username, id }];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFav(true);
  }
  const removeFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    console.log(favs);
    const newFavs = favs.filter((fav) => fav.id !== id);
    console.log(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    console.log(localStorage.getItem("favs"));
    setFav(false);
  };
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const fav = favs.some((fav) => fav.id === id);
    setFav(fav);
  }, [id]);

  return (
    <div
      style={{ background: theme.background, color: theme.color }}
      className="card"
    >
        <Link to={`/dentist/${id}`}>
        <img src={require('../images/doctor.jpg')} alt="" width="100%"/>
        <h3 style={{ background: theme.background, color: theme.color, textAlign: "center" }}>
          {name}{" "}
        </h3>
        <p style={{ background: theme.background, color: theme.color, textAlign: "center" }}>
          {username}
        </p>
        <p style={{ background: theme.background, color: theme.color, textAlign: "center" }}>{id}</p>
      </Link>
      {fav ? (
        <button className="favButton" onClick={removeFav}>Remove fav</button>
      ) : (
        <button className="favButton" onClick={addFav}>Add fav</button>
      )}
    </div>
  );
};

export default Card;

